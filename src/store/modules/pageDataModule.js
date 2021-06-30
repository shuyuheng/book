import { Message } from 'element-ui';
// 递归遍历组件 by ID
const treeForEach = (children, id) => {
    for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (item.id == id) {
            return {
                children,
                item,
                id,
                index: i,
            };

        } else if (item.children && item.children.length) {
            let treeData = treeForEach(item.children, id);
            if (treeData) return treeData
        }
    }
}
// module
const pageDataModule = {
    namespaced: true, // 开启命名空间 防止重复命名导致崩溃
    state: {
        // 书籍所有页面/组件书籍
        pageData: {
            minID: 2,
            components: [
                {
                    id: 1,
                    component: "Page",
                    componentTitleStr: "页面",
                    componentData: {
                        width: 800,
                        height: 1100,
                    },
                    children: [],
                },
            ],
        },
        // 选中的组件
        selectComponents: [],
        // 拖动状态
        pageDragState: false,
        // 即将添加的组件
        pageAddComponent: "",
        // 即将添加的组件的位置
        movement: {
            x: 0,
            y: 0,
            dataX: 0,
            dataY: 0
        },
        // 即将修改的组件
        pageUpdateComponent: ""
    },
    mutations: {
        // 设置即将添加的组件的位置
        setMovement(state, movement) {
            state.movement = movement
        },
        // 设置即将添加的组件
        setPageAddComponent(state, component) {
            state.pageAddComponent = component
            // 同时设置状态
            this.commit('pageDataModule/setPageDragState', component)
        },
        // 设置拖动状态
        setPageDragState(state, val) {
            state.pageDragState = new Boolean(val) == true
        },
        // 添加组件
        pageDataAdd(state, { parentId, component }) {
            // 深度克隆防止污染
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            component = JSON.parse(JSON.stringify(component))
            const setIds = (component) => {
                component.id = pageData.minID;
                // 添加id+1
                pageData.minID++;
                if (component.children && component.children.length) {
                    for (let i = 0; i < component.children.length; i++) {
                        const item = component.children[i];
                        setIds(item)
                    }
                }
            }
            setIds(component)
            // 如果组件需要拖拽的位置
            if (component.componentData.hasOwnProperty("x")) {
                component.componentData.x = state.movement.dataX;
                component.componentData.y = state.movement.dataY;
            }
            // 添加页面不需要父级
            if (parentId == 0 || parentId == null) {
                pageData.components.push(component)
            } else {
                let { item } = treeForEach(pageData.components, parentId)
                item.children.push(component)
            }
            // 重新赋值
            state.pageData = pageData
        },
        // 删除组件
        pageDataRemove(state, id) {
            // 深度克隆防止污染
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            let { children, index } = treeForEach(pageData.components, id)
            children.splice(index, 1)
            // 重新赋值
            state.pageData = pageData
        },
        // 修改组件
        pageDataUpdate(state, component) {
            console.log('修改组件', component);
            // 深度克隆防止污染
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            let { children, index } = treeForEach(pageData.components, component.id)
            children[index] = component
            // 修改id 强制更新
            component.id = (typeof component.id) == 'string' ? parseInt(component.id) : component.id + 'u'
            // 重新赋值
            state.pageData = pageData
            console.log('修改完成', pageData);
        },
        // 是否将即将添加的组件放入页面中
        isAddPageAddComponent(state, parentId) {
            if (!state.pageDragState) {
                return
            }
            this.commit('pageDataModule/pageDataAdd', { parentId, component: state.pageAddComponent })
            this.commit('pageDataModule/setPageAddComponent', "")
        },
        // 设置即将修改的组件
        setPageUpdateComponent(state, component) {
            console.log('编辑组件', component);
            state.pageUpdateComponent = component
        },
        // 设置组件数据位置 上移动/下移
        setDataIndex(state, { id, type }) {
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            // type true上 false下
            let { children, index } = treeForEach(pageData.components, id)
            if (index == 0 && type == true) {
                return Message.warning('已经是第一位了')
            } else if (index == children.length - 1 && type == false) {
                return Message.warning('已经是最后一位了')
            }
            let myItem = children[index]
            if (type) {
                children[index] = children[index - 1]
                children[index - 1] = myItem
            } else {
                children[index] = children[index + 1]
                children[index + 1] = myItem
            }
            // 重新赋值
            state.pageData = pageData
        },
        // 锁定 or 解锁组件
        setComponentLock(state, id) {
            const treeFor = (children, lock) => {
                for (let i = 0; i < children.length; i++) {
                    const item = children[i];
                    item.lock = lock
                    // 取消子集选中状态
                    let index = state.selectComponents.findIndex(el => el.id == item.id)
                    if (lock && index != -1) {
                        state.selectComponents.splice(index, 1)
                    }
                    if (item.children && item.children.length) {
                        treeFor(item.children, lock)
                    }
                }
            }
            // 深度克隆防止污染
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            let { children, index } = treeForEach(pageData.components, id)
            children[index].lock = !children[index].lock
            // 编辑子集
            treeFor(children[index].children, children[index].lock)
            // 重新赋值
            state.pageData = pageData
            console.log(1);
        }
    },
    actions: {

    },
}

export default pageDataModule