var apiUrl="/api/v1/admin/";
const multipartformdata = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
const apiClient = {
    async addAppeals(requestData) {
        return  await axios.get(apiUrl+"appeal",requestData);
    },
    async readAppeals() {
        return  await axios.get(apiUrl+"appeal");
    },
    async checkAppeal(requestData) {
        return  await axios.post(apiUrl+"appeal/checkAppeal",requestData);
    },
    async deleteAppeal(appealId) {
        return await axios.delete(apiUrl+"appeal/"+appealId);
    },
    async readPages() {
        return  await axios.get(apiUrl+"page");
    },
    async addPage(requestData) {
        return  await axios.post(apiUrl+"page",requestData);
    },
    async updatePage(id,requestData) {
        return  await axios.put(apiUrl+"page/"+id,requestData);
    },
    async readPage(id) {
        return  await axios.get(apiUrl+"page/"+id);
    },
    async readRelated(id) {
        return  await axios.post(apiUrl+"page/related/"+id);
    },
    async deletePage(id) {
        return  await axios.delete(apiUrl+"page/"+id);
    },
    //////////////////////// News Begin/////////////////////////////
    async readNews() {
        return  await axios.get(apiUrl+"news");
    },
    async readRelatedNews() {
        return  await axios.get(apiUrl+"news/related");
    },
    async addNews(requestData) {
        return  await axios.post(apiUrl+"news",requestData,multipartformdata);
    },
    async updateNews(id,requestData) {
        return  await axios.post(apiUrl+"news/"+id,requestData,multipartformdata);
    },
    async readOneNews(slug) {
        return  await axios.get(apiUrl+"news/"+slug);
    },
    async deleteNews(id) {
        return  await axios.delete(apiUrl+"news/"+id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Menus Begin/////////////////////////////

    async readMenusForSelect(idMenu=0) {
        return  await axios.get(apiUrl+"menu/select");
    },
    async readMenusFront() {
        return  await axios.get(apiUrl+"menu/front");
    },
    async readMenus(parent=null) {
        if(parent==null) return  await axios.get(apiUrl+"menu");
        else return  await axios.get(apiUrl+"menu?parent=" + parent);
    },

    async addMenu(requestData) {
        return  await axios.post(apiUrl+"menu",requestData);
    },
    async updateMenu(id,requestData) {
        return  await axios.put(apiUrl+"menu/"+id,requestData);
    },
    async readOneMenu(id) {
        return  await axios.get(apiUrl+"menu/"+id);
    },
    async deleteMenu(id) {
        return  await axios.delete(apiUrl+"menu/"+id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Categories Begin/////////////////////////////
    async readCategories(limit=0) {
        if(limit>0)
        return  await axios.get(apiUrl+"categories?limit="+limit);
        else
        return  await axios.get(apiUrl+"categories");
    },
    async readCategoriesForSelect() {
        return  await axios.get(apiUrl+"categories/select");
    },
    async addCategory(requestData) {
        return  await axios.post(apiUrl+"categories",requestData);
    },
    async updateCategory(id,requestData) {
        return  await axios.put(apiUrl+"categories/"+id,requestData);
    },
    async readCategory(slug,withNews=false) {
        if(withNews)
        return  await axios.get(apiUrl+"categories/"+slug+"?withnews=1",);
        else
        return  await axios.get(apiUrl+"categories/"+slug);
    },
    async deleteCategory(id) {
        return  await axios.delete(apiUrl+"categories/"+id);
    },
    //////////////////////// Categories End /////////////////////////////

    //////////////////////// My Events Begin/////////////////////////////
    async readEvents() {
        return  await axios.get(apiUrl+"events");
    },
    async readEventsForFront() {
        return  await axios.get(apiUrl+"front/events");
    },
    async addEvent(requestData) {
        return  await axios.post(apiUrl+"events",requestData);
    },
    async updateEvent(id,requestData) {
        return  await axios.put(apiUrl+"events/"+id,requestData);
    },
    async readEvent(id) {
        return  await axios.get(apiUrl+"events/" + id);
    },
    async deleteEvent(id) {
        return  await axios.delete(apiUrl+"events/"+id);
    },
    //////////////////////// My Events End /////////////////////////////

};
export default apiClient;
