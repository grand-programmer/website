import i18n from "../../i18n";

var apiUrl = "/api/v1/";

const multipartformdata = {
    headers: {
        'content-type': 'multipart/form-data',
        'X-Localization':i18n.locale
    }
}
let localization={
    headers: {
        'X-Localization':i18n.locale
    }
}
let localizationHeader= {
        'X-Localization':i18n.locale
}

const apiClient = {
    async addAppeals(requestData) {
        requestData.push(localization);
        return await axios.get(apiUrl + "appeal", requestData);
    },
    async readAppeals() {
        return await axios.get(apiUrl + "appeal",localization);
    },
    async checkAppeal(requestData) {
        return await axios.post(apiUrl + "appeal/checkAppeal", requestData,localization);
    },
    async deleteAppeal(appealId) {
        return await axios.delete(apiUrl + "appeal/" + appealId);
    },
    async readPages() {
        return await axios.get(apiUrl + "page",localization);
    },
    async addPage(requestData) {
        return await axios.post(apiUrl + "page", requestData);
    },
    async updatePage(id, requestData) {
        return await axios.put(apiUrl + "page/" + id, requestData);
    },
    async readPage(id) {
        return await axios.get(apiUrl + "page/" + id,localization);
    },
    async readRelated(id) {
        return await axios.post(apiUrl + "page/related/" + id,null,localization);
    },
    async deletePage(id) {
        return await axios.delete(apiUrl + "page/" + id);
    },
    //////////////////////// News Begin/////////////////////////////
    async readNews(requestData) {
        return await axios.get(apiUrl + "news", {params: requestData,headers:localizationHeader});
    },
    async search(requestData) {
        return await axios.post(apiUrl + "spreaded-search",  requestData, localization);
    },
    async readRelatedNews() {
        return await axios.get(apiUrl + "news/related",localization);
    },
    async addNews(requestData) {
        return await axios.post(apiUrl + "news", requestData, multipartformdata);
    },
    async updateNews(id, requestData) {
        return await axios.post(apiUrl + "news/" + id, requestData, multipartformdata);
    },
    async readOneNews(slug) {
        // console.log(i18n.locale)
        return await axios.get(apiUrl + "news/" + slug, localization);
    },
    async deleteNews(id) {
        return await axios.delete(apiUrl + "news/" + id);
    },
    //////////////////////// News End /////////////////////////////

    //////////////////////// Menus Begin/////////////////////////////

    async readMenusForSelect(idMenu = 0) {
        return await axios.get(apiUrl + "menu/select",localization);
    },
    async readMenusFront() {
        return await axios.get(apiUrl + "menu/front",localization);
    },
    async readMenus(parent = null) {
        if (parent == null) return await axios.get(apiUrl + "menu",localization);
        else return await axios.get(apiUrl + "menu?parent=" + parent,localization);
    },
    async readOneMenu(id) {
        return await axios.get(apiUrl + "menu/" + id,localization);
    },
    //////////////////////// Footer Menus Begin/////////////////////////////

    async readFooterMenusForSelect(idMenu = 0) {
        return await axios.get(apiUrl + "footermenu/select",localization);
    },
    async readFooterMenusFront() {
        return await axios.get(apiUrl + "footermenu/front",localization);
    },
    async readFooterMenus(parent = null) {
        if (parent == null) return await axios.get(apiUrl + "footermenu",localization);
        else return await axios.get(apiUrl + "footermenu?parent=" + parent,localization);
    },
    async readFooterOneMenu(id) {
        return await axios.get(apiUrl + "footermenu/" + id,localization);
    },
    /*async addMenu(requestData) {
        return await axios.post(apiUrl + "menu", requestData);
    },
    async updateMenu(id, requestData) {
        return await axios.put(apiUrl + "menu/" + id, requestData);
    },

    async deleteMenu(id) {
        return await axios.delete(apiUrl + "menu/" + id);
    },*/
    //////////////////////// News End /////////////////////////////

    //////////////////////// Categories Begin/////////////////////////////
    async readCategories(limit = 0) {
        if (limit > 0)
            return await axios.get(apiUrl + "categories?limit=" + limit,localization);
        else
            return await axios.get(apiUrl + "categories",localization);
    },
    async readCategoriesForSelect() {
        return await axios.get(apiUrl + "categories/select",localization);
    },
    async addCategory(requestData) {
        return await axios.post(apiUrl + "categories", requestData);
    },
    async updateCategory(id, requestData) {
        return await axios.put(apiUrl + "categories/" + id, requestData);
    },
    async readCategory(slug, withNews = false,page=1) {

        if (withNews)
            return await axios.get(apiUrl + "categories/" + slug + "?withnews=1&page="+page,localization);
        else
            return await axios.get(apiUrl + "categories/" + slug,requestData);
    },
    async deleteCategory(id) {
        return await axios.delete(apiUrl + "categories/" + id);
    },
    //////////////////////// Categories End /////////////////////////////

    //////////////////////// My Events Begin/////////////////////////////
    async readEvents() {
        return await axios.get(apiUrl + "events",localization);
    },
    async readEventsForFront() {
        return await axios.get(apiUrl + "front/events",localization);
    },
    async addEvent(requestData) {
        return await axios.post(apiUrl + "events", requestData);
    },
    async updateEvent(id, requestData) {
        return await axios.put(apiUrl + "events/" + id, requestData);
    },
    async readEvent(id) {
        return await axios.get(apiUrl + "events/" + id,localization);
    },
    async deleteEvent(id) {
        return await axios.delete(apiUrl + "events/" + id);
    },
    //////////////////////// My Events End /////////////////////////////
    //////////////////////// My Votes Begin/////////////////////////////
    async readVotes() {
        return await axios.get(apiUrl + "votes",localization);
    },
    async readVotesForFront() {
        return await axios.get(apiUrl + "votes/front",localization);
    },
    async addVote(requestData) {
        return await axios.post(apiUrl + "votes", requestData);
    },
    async updateVote(id, requestData) {
        return await axios.put(apiUrl + "votes/" + id, requestData);
    },
    async readVote(id) {
        return await axios.get(apiUrl + "votes/" + id,localization);
    },
    async deleteVote(id) {
        return await axios.delete(apiUrl + "votes/" + id);
    },
    //////////////////////// My Votes End /////////////////////////////

    //////////////////////// My Faqs Begin/////////////////////////////
    async readFaqs() {
        return await axios.get(apiUrl + "faqs",localization);
    },
    async readFaqsForFront() {
        return await axios.get(apiUrl + "front/faqs",localization);
    },
    async addFaq(requestData) {
        return await axios.post(apiUrl + "faqs", requestData);
    },
    async updateFaq(id, requestData) {
        return await axios.put(apiUrl + "faqs/" + id, requestData);
    },
    async readFaq(id) {
        return await axios.get(apiUrl + "faqs/" + id,localization);
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
        return await axios.get(apiUrl + "organizations" + str,localization);
    },
    async addOrg(requestData) {
        return await axios.post(apiUrl + "organizations", requestData);
    },
    async updateOrg(id, requestData) {
        return await axios.post(apiUrl + "organizations/" + id, requestData);
    },
    async readOrg(id) {
        return await axios.get(apiUrl + "organizations/" + id,localization);
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
        return await axios.get(apiUrl + "apparat" + str,localization);
    },
    async addApparat(requestData) {
        return await axios.post(apiUrl + "apparat", requestData);
    },
    async updateApparat(id, requestData) {
        return await axios.post(apiUrl + "apparat/" + id, requestData);
    },
    async readApparat(id) {
        return await axios.get(apiUrl + "apparat/" + id,localization);
    },
    async deleteApparat(id) {
        return await axios.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My boshqarma End /////////////////////////////
// ////////////////////// My rahbariyat Begin/////////////////////////////
    async readMarkaziy(org=null) {
        let str = "?markaziy=0" + (org ? "&org=" + org : "")

        return await axios.get(apiUrl + "apparat" + str,localization);
    },
    async readRahbariyats(org=null) {
        let str = "?rahbar=0" + (org ? "&org=" + org : "");

        return await axios.get(apiUrl + "apparat/" + str,localization);
    },
    async addRahbariyat(requestData) {
        return await axios.post(apiUrl + "apparat", requestData);
    },
    async updateRahbariyat(id, requestData) {
        return await axios.post(apiUrl + "apparat/" + id, requestData);
    },
    async readRahbariyat(id) {

        return await axios.get(apiUrl + "apparat/" + id+"?rahbar=0",localization);
    },
    async deleteRahbariyat(id) {
        return await axios.delete(apiUrl + "apparat/" + id);
    },
    //////////////////////// My rahbariyat End /////////////////////////////

    async getDocuments(requestData) {
        if(typeof requestData !=='undefined' && requestData)
        return await axios.get(apiUrl + "documents", {headers:localizationHeader, params:JSON.parse(JSON.stringify(requestData))});
        return await axios.get(apiUrl + "documents", {headers:localizationHeader});
    },
    async getDocumentCategories(requestData) {
        return await axios.get(apiUrl + "documentcategories", localization);
    },

    async getOpenData(requestData) {
        console.log(requestData)
        if(typeof requestData !=='undefined' && requestData)
            return await axios.get(apiUrl + "opendata", {headers:localizationHeader, params:JSON.parse(JSON.stringify(requestData))});
        return await axios.get(apiUrl + "opendata", {headers:localizationHeader});
    },
    async getOneOpenData(id,requestData) {
            return await axios.post(apiUrl + "opendata/" + id, JSON.parse(JSON.stringify(requestData)), {headers:localizationHeader} );
    },
};
export default apiClient;
