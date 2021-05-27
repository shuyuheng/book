let treeData = ""
// 递归遍历组件 by ID
const treeForEach = (children, id) => {
    for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (item.id == id) {
            return treeData = {
                children,
                item,
                id,
                index: i,
            };

        } else if (item.children && item.children.length) {
            treeForEach(item.children, id);
        }
    }
}
// 
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
                    componentData: {},
                    children: [],
                },
            ],
        },
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
            component.id = pageData.minID;
            // 添加id+1
            pageData.minID++;
            // 如果组件需要拖拽的位置
            if (component.componentData.hasOwnProperty("x")) {
                component.componentData.x = state.movement.dataX;
                component.componentData.y = state.movement.dataY;
            }
            // 添加页面不需要父级
            if (parentId == 0 || parentId == null) {
                pageData.components.push(component)
            } else {
                treeForEach(pageData.components, parentId)
                let { item } = treeData
                item.children.push(component)
            }
            // 重新赋值
            state.pageData = pageData
        },
        // 删除组件
        pageDataRemove(state, id) {
            // 深度克隆防止污染
            let pageData = JSON.parse(JSON.stringify(state.pageData))
            treeForEach(pageData.components, id)
            let { children, index } = treeData
            children.splice(index, 1)
            // 重新赋值
            state.pageData = pageData
        },
        // 是否将即将添加的组件放入页面中
        isAddPageAddComponent(state, parentId) {
            if (!state.pageDragState) {
                return
            }
            this.commit('pageDataModule/pageDataAdd', { parentId, component: state.pageAddComponent })
            this.commit('pageDataModule/setPageAddComponent', "")
        }
    },
    actions: {

    },
}

export default pageDataModule