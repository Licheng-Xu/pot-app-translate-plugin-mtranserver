async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    let { requestPath: url, token } = config;

    // url
    if (url === undefined || url.length === 0) {
        url = "http://localhost:8989"
    }
    if (!url.startsWith("http")) {
        url = `http://${url}`;
    }
    // headers
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    if (token && token.length > 0) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    // body
    let body = {
        "from": from,
        "to": to,
        "text": text
    }

    const res = await fetch(`${url}/translate`, {
        method: 'POST',
        headers: headers,
        body: {
            type: "Json",
            payload: body
        }
    })

    if (res.ok) {
        let resData = res.data;
        const { result } = resData;
        if (result) {
            return result;
        } else {
            throw JSON.stringify(resData);
        }
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}\n`;
    }
}
