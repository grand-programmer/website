import Vue from "vue";

var apiUrl = "/api/v1/admin/";
const multipartformdata = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
const apiClient = {
    async addAppeals(requestData) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "appeal", requestData);
    },
    async readAppeals() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "appeal");
    },
    async checkAppeal(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "appeal/checkAppeal", requestData);
    },
    async deleteAppeal(appealId) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "appeal/" + appealId);
    },
    async readPages() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "page");
    },
    async addPage(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "page", requestData);
    },
    async updatePage(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "page/" + id, requestData);
    },
    async readPage(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "page/" + id);
    },
    async readRelated(id) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "page/related/" + id);
    },
    async deletePage(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "page/" + id);
    },
    ///////// Files
    async readFiles(Request) {

        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "file", { params: Request});
    },
    async addFile(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "file", requestData,multipartformdata);
    },
    async updateFile(id, requestData, header) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "file/" + id, requestData, (header!==null) ? header : multipartformdata);
    },
    async readFile(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "file/" + id);
    },
    async deleteFile(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "file/" + id);
    },

    //////////////////////// Categories Begin/////////////////////////////
    async readCategories(limit = 0) {
        if (limit > 0)
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "categories?limit=" + limit);
        else
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "categories");
    },
    async readCategoriesForSelect() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "categories/select");
    },
    async addCategory(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "categories", requestData);
    },
    async updateCategory(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "categories/" + id, requestData);
    },
    async readCategory(slug, withNews = false) {
        if (withNews)
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "categories/" + slug + "?withnews=1",);
        else
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "categories/" + slug);
    },
    async deleteCategory(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "categories/" + id);
    },
    //////////////////////// Categories End /////////////////////////////


    //////////////////////// News Begin/////////////////////////////
    async readNews(requestData) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "news", {params: requestData});
    },
    async readRelatedNews() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "news/related");
    },
    async addNews(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "news", requestData, multipartformdata);
    },
    async updateNews(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "news/" + id, requestData, multipartformdata);
    },
    async readOneNews(slug) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "news/" + slug);
    },
    async deleteNews(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "news/" + id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Menus Begin/////////////////////////////

    async readMenusForSelect(idMenu = 0) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "menu/select");
    },
    async readMenusFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "menu/front");
    },
    async readMenus(parent = null) {
        if (parent == null) return await Vue.prototype.$auth.plugins.http.get(apiUrl + "menu");
        else return await Vue.prototype.$auth.plugins.http.get(apiUrl + "menu?parent=" + parent);
    },

    async addMenu(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "menu", requestData);
    },
    async updateMenu(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "menu/" + id, requestData);
    },
    async readOneMenu(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "menu/" + id);
    },
    async deleteMenu(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "menu/" + id);
    },
    //////////////////////// Menus End /////////////////////////////

    //////////////////////// Footer Menus Begin/////////////////////////////

    async readFooterMenusForSelect(idMenu = 0) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "footermenu/select");
    },
    async readFooterMenusFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "footermenu/front");
    },
    async readFooterMenus(parent = null) {
        if (parent == null) return await Vue.prototype.$auth.plugins.http.get(apiUrl + "footermenu");
        else return await Vue.prototype.$auth.plugins.http.get(apiUrl + "footermenu?parent=" + parent);
    },

    async addFooterMenu(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "footermenu", requestData);
    },
    async updateFooterMenu(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "footermenu/" + id, requestData);
    },
    async readFooterOneMenu(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "footermenu/" + id);
    },
    async deleteFooterMenu(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "footermenu/" + id);
    },
    //////////////////////// Footer Menus End /////////////////////////////


    //////////////////////// DocumentCategories Begin/////////////////////////////
    async readDocumentCategories(requestData) {
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "doccategories", {params:requestData});
    },
    async readDocumentCategoriesForSelect() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "doccategories/select");
    },
    async addDocumentCategory(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "doccategories", requestData);
    },
    async updateDocumentCategory(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "doccategories/" + id, requestData);
    },
    async readDocumentCategory(slug, withNews = false) {
        if (withNews)
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "doccategories/" + slug + "?withnews=1",);
        else
            return await Vue.prototype.$auth.plugins.http.get(apiUrl + "doccategories/" + slug);
    },
    async deleteDocumentCategory(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "doccategories/" + id);
    },
    //////////////////////// DocumentCategories End /////////////////////////////


    //////////////////////// Document Begin/////////////////////////////
    async readDocuments(requestData) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "documents", {params: requestData});
    },
    async addDocument(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "documents", requestData, multipartformdata);
    },
    async updateDocument(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "documents/" + id, requestData);
    },
    async readOneDocument(slug) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "documents/" + slug);
    },
    async deleteDocument(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "documents/" + id);
    },
    //////////////////////// Document End /////////////////////////////

    //////////////////////// My Events Begin/////////////////////////////
    async readEvents() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "events");
    },
    async readEventsForFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "front/events");
    },
    async addEvent(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "events", requestData);
    },
    async updateEvent(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "events/" + id, requestData);
    },
    async readEvent(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "events/" + id);
    },
    async deleteEvent(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "events/" + id);
    },
    //////////////////////// My Events End /////////////////////////////
    //////////////////////// My Votes Begin/////////////////////////////
    async readVotes() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "votes");
    },
    async readVotesForFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "front/votes");
    },
    async addVote(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "votes", requestData);
    },
    async updateVote(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "votes/" + id, requestData);
    },
    async readVote(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "votes/" + id);
    },
    async deleteVote(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "votes/" + id);
    },
    //////////////////////// My Votes End /////////////////////////////

    //////////////////////// My Votes Begin/////////////////////////////
    async readVotes() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "votes");
    },
    async readVotesForFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "front/votes");
    },
    async addVote(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "votes", requestData);
    },
    async updateVote(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "votes/" + id, requestData);
    },
    async readVote(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "votes/" + id);
    },
    async deleteVote(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "votes/" + id);
    },
    //////////////////////// My Votes End /////////////////////////////

    //////////////////////// My OpenDatas Begin/////////////////////////////
    async readOpenDatas() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "opendatas");
    },
    async readOpenDatasForFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "front/opendatas");
    },
    async addOpenData(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "opendatas", requestData);
    },
    async updateOpenData(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "opendatas/" + id, requestData);
    },
    async readOpenData(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "opendatas/" + id);
    },
    async deleteOpenData(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "opendatas/" + id);
    },
    //////////////////////// My OpenDatas End /////////////////////////////

    //////////////////////// My OpenData Files Begin/////////////////////////////
    async readOpenDataFiles(opendata) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "opendata/" + opendata + "/files");
    },
    async addOpenDataFile(opendata,requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "opendata/" + opendata + "/files", requestData);
    },
    async updateOpenDataFile(opendata, id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "opendata/" + opendata + "/files/" + id, requestData);
    },
    async readOpenDataFile(opendata, id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "opendata/" + opendata + "/files/" + id);
    },
    async deleteOpenDataFile(opendata, id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "opendata/" + opendata + "/files/" + id);
    },
    //////////////////////// My OpenData Files End /////////////////////////////

    //////////////////////// My Faqs Begin/////////////////////////////
    async readFaqs() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "faqs");
    },
    async readFaqsForFront() {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "front/faqs");
    },
    async addFaq(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "faqs", requestData);
    },
    async updateFaq(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.put(apiUrl + "faqs/" + id, requestData);
    },
    async readFaq(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "faqs/" + id);
    },
    async deleteFaq(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "faqs/" + id);
    },
    //////////////////////// My Faqs End /////////////////////////////
    //////////////////////// My Organizations Begin/////////////////////////////
    async readOrgs(requestData) {
        let str = "";
        if (requestData)
            str = "?" + Object.entries(requestData).map(([key, val]) => `${key}=${val}`).join('&');
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "organizations" + str);
    },
    async addOrg(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "organizations", requestData);
    },
    async updateOrg(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "organizations/" + id, requestData);
    },
    async readOrg(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "organizations/" + id);
    },
    async deleteOrg(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "organizations/" + id);
    },
    //////////////////////// My Organizations End /////////////////////////////
    // ////////////////////// My boshqarma Begin/////////////////////////////
    async readApparats(requestData) {
        let str = "";
        if (requestData)
            str = "?" + Object.entries(requestData).map(([key, val]) => `${key}=${val}`).join('&');
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "apparat/" + str);
    },
    async addApparat(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "apparat", requestData);
    },
    async updateApparat(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "apparat/" + id, requestData);
    },
    async readApparat(id) {
        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "apparat/" + id);
    },
    async deleteApparat(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My boshqarma End /////////////////////////////
// ////////////////////// My rahbariyat Begin/////////////////////////////
    async readMarkaziy(org=null) {
        let str = "?markaziy=0" + org ? "&org=" + org : ""

        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "apparat" + str);
    },
    async readRahbariyats(org=null) {
        let str = "?rahbar=0" + (org ? "&org=" + org : "");

        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "apparat" + str);
    },
    async addRahbariyat(requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "apparat", requestData);
    },
    async updateRahbariyat(id, requestData) {
        return await Vue.prototype.$auth.plugins.http.post(apiUrl + "apparat/" + id, requestData);
    },
    async readRahbariyat(id) {

        return await Vue.prototype.$auth.plugins.http.get(apiUrl + "apparat/" + id+"?rahbar=0");
    },
    async deleteRahbariyat(id) {
        return await Vue.prototype.$auth.plugins.http.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My rahbariyat End /////////////////////////////

};
export default apiClient;
