var one_id = {
    url: 'https://sso.egov.uz/sso/oauth/Authorization.do',
    params: {
        client_id: 'customs_uz',
        redirect_uri: 'login/one_id',
        response_type: 'one_code',
        scope: 'customs_uz',
        state: 'testState',
        grant_type : 'one_authorization_code',
    }
};

export default one_id;
