class HttpService {
  baseUrl = "";

  constructor() {    
    this.baseUrl = "http://localhost:25697";
  }

  get(subUrl) {
    let url = this.baseUrl + subUrl;
    let f = fetch(url, {
        method : "GET",
        mode :"cors"
    }).then(resp => resp.json())
    .then(function(data) {
      return data;
    });
    return f;
  }

  post(request, subUrl) {
    let url = this.baseUrl + subUrl;
    let f = fetch(url, {
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(function(data) {
        return data;
      });

    return f;
  }

  put(request, subUrl) {
    let url = this.baseUrl + subUrl;
    let f = fetch(url, {
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json"
      },
      method: "PUT",
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(function(data) {
        return data;
      });

    return f;
  }
}

export default HttpService;
