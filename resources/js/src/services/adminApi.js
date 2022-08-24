var apiUrl = "/api/v1/admin/";
const multipartformdata = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
const apiClient = {
    async addAppeals(requestData) {
        return await axios.get(apiUrl + "appeal", requestData);
    },
    async readAppeals() {
        return await axios.get(apiUrl + "appeal");
    },
    async checkAppeal(requestData) {
        return await axios.post(apiUrl + "appeal/checkAppeal", requestData);
    },
    async deleteAppeal(appealId) {
        return await axios.delete(apiUrl + "appeal/" + appealId);
    },
    async readPages() {
        return await axios.get(apiUrl + "page");
    },
    async addPage(requestData) {
        return await axios.post(apiUrl + "page", requestData);
    },
    async updatePage(id, requestData) {
        return await axios.put(apiUrl + "page/" + id, requestData);
    },
    async readPage(id) {
        return await axios.get(apiUrl + "page/" + id);
    },
    async readRelated(id) {
        return await axios.post(apiUrl + "page/related/" + id);
    },
    async deletePage(id) {
        return await axios.delete(apiUrl + "page/" + id);
    },
    //////////////////////// News Begin/////////////////////////////
    async readNews(requestData) {
        return await axios.get(apiUrl + "news", {params: requestData});
    },
    async readRelatedNews() {
        return await axios.get(apiUrl + "news/related");
    },
    async addNews(requestData) {
        return await axios.post(apiUrl + "news", requestData, multipartformdata);
    },
    async updateNews(id, requestData) {
        return await axios.post(apiUrl + "news/" + id, requestData, multipartformdata);
    },
    async readOneNews(slug) {
        return await axios.get(apiUrl + "news/" + slug);
    },
    async deleteNews(id) {
        return await axios.delete(apiUrl + "news/" + id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Menus Begin/////////////////////////////

    async readMenusForSelect(idMenu = 0) {
        return await axios.get(apiUrl + "menu/select");
    },
    async readMenusFront() {
        return await axios.get(apiUrl + "menu/front");
    },
    async readMenus(parent = null) {
        if (parent == null) return await axios.get(apiUrl + "menu");
        else return await axios.get(apiUrl + "menu?parent=" + parent);
    },

    async addMenu(requestData) {
        return await axios.post(apiUrl + "menu", requestData);
    },
    async updateMenu(id, requestData) {
        return await axios.put(apiUrl + "menu/" + id, requestData);
    },
    async readOneMenu(id) {
        return await axios.get(apiUrl + "menu/" + id);
    },
    async deleteMenu(id) {
        return await axios.delete(apiUrl + "menu/" + id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Categories Begin/////////////////////////////
    async readCategories(limit = 0) {
        if (limit > 0)
            return await axios.get(apiUrl + "categories?limit=" + limit);
        else
            return await axios.get(apiUrl + "categories");
    },
    async readCategoriesForSelect() {
        return await axios.get(apiUrl + "categories/select");
    },
    async addCategory(requestData) {
        return await axios.post(apiUrl + "categories", requestData);
    },
    async updateCategory(id, requestData) {
        return await axios.put(apiUrl + "categories/" + id, requestData);
    },
    async readCategory(slug, withNews = false) {
        if (withNews)
            return await axios.get(apiUrl + "categories/" + slug + "?withnews=1",);
        else
            return await axios.get(apiUrl + "categories/" + slug);
    },
    async deleteCategory(id) {
        return await axios.delete(apiUrl + "categories/" + id);
    },
    //////////////////////// Categories End /////////////////////////////

    //////////////////////// My Events Begin/////////////////////////////
    async readEvents() {
        return await axios.get(apiUrl + "events");
    },
    async readEventsForFront() {
        return await axios.get(apiUrl + "front/events");
    },
    async addEvent(requestData) {
        return await axios.post(apiUrl + "events", requestData);
    },
    async updateEvent(id, requestData) {
        return await axios.put(apiUrl + "events/" + id, requestData);
    },
    async readEvent(id) {
        return await axios.get(apiUrl + "events/" + id);
    },
    async deleteEvent(id) {
        return await axios.delete(apiUrl + "events/" + id);
    },
    //////////////////////// My Events End /////////////////////////////
    //////////////////////// My Votes Begin/////////////////////////////
    async readVotes() {
        return await axios.get(apiUrl + "votes");
    },
    async readVotesForFront() {
        return await axios.get(apiUrl + "front/votes");
    },
    async addVote(requestData) {
        return await axios.post(apiUrl + "votes", requestData);
    },
    async updateVote(id, requestData) {
        return await axios.put(apiUrl + "votes/" + id, requestData);
    },
    async readVote(id) {
        return await axios.get(apiUrl + "votes/" + id);
    },
    async deleteVote(id) {
        return await axios.delete(apiUrl + "votes/" + id);
    },
    //////////////////////// My Votes End /////////////////////////////

    //////////////////////// My Faqs Begin/////////////////////////////
    async readFaqs() {
        return await axios.get(apiUrl + "faqs");
    },
    async readFaqsForFront() {
        return await axios.get(apiUrl + "front/faqs");
    },
    async addFaq(requestData) {
        return await axios.post(apiUrl + "faqs", requestData);
    },
    async updateFaq(id, requestData) {
        return await axios.put(apiUrl + "faqs/" + id, requestData);
    },
    async readFaq(id) {
        return await axios.get(apiUrl + "faqs/" + id);
    },
    async deleteFaq(id) {
        return await axios.delete(apiUrl + "faqs/" + id);
    },
    //////////////////////// My Faqs End /////////////////////////////
    //////////////////////// My Organizations Begin/////////////////////////////
    async readOrgs(requestData) {
        let str = "";
        if (requestData)
            str = "?" + Object.entries(requestData).map(([key, val]) => `${key}=${val}`).join('&');
        return await axios.get(apiUrl + "organizations" + str);
    },
    async addOrg(requestData) {
        return await axios.post(apiUrl + "organizations", requestData);
    },
    async updateOrg(id, requestData) {
        return await axios.post(apiUrl + "organizations/" + id, requestData);
    },
    async readOrg(id) {
        return await axios.get(apiUrl + "organizations/" + id);
    },
    async deleteOrg(id) {
        return await axios.delete(apiUrl + "organizations/" + id);
    },
    //////////////////////// My Organizations End /////////////////////////////
    // ////////////////////// My boshqarma Begin/////////////////////////////
    async readApparats(requestData) {
        let str = "";
        if (requestData)
            str = "?" + Object.entries(requestData).map(([key, val]) => `${key}=${val}`).join('&');
        return await axios.get(apiUrl + "apparat" + str);
    },
    async addApparat(requestData) {
        return await axios.post(apiUrl + "apparat", requestData);
    },
    async updateApparat(id, requestData) {
        return await axios.post(apiUrl + "apparat/" + id, requestData);
    },
    async readApparat(id) {
        return await axios.get(apiUrl + "apparat/" + id);
    },
    async deleteApparat(id) {
        return await axios.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My boshqarma End /////////////////////////////
// ////////////////////// My rahbariyat Begin/////////////////////////////
    async readMarkaziy() {
        let str = "?markaziy=0";

        return await axios.get(apiUrl + "apparat" + str);
    },
    async readRahbariyats() {
        let str = "?rahbar=0";

        return await axios.get(apiUrl + "apparat" + str);
    },
    async addRahbariyat(requestData) {
        return await axios.post(apiUrl + "apparat", requestData);
    },
    async updateRahbariyat(id, requestData) {
        return await axios.post(apiUrl + "apparat/" + id, requestData);
    },
    async readRahbariyat(id) {

        return await axios.get(apiUrl + "apparat/" + id+"?rahbar=0");
    },
    async deleteRahbariyat(id) {
        return await axios.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My rahbariyat End /////////////////////////////

};
export default apiClient;
