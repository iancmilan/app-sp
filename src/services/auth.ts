interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function singIn(): Promise<Response> {
    //Simulando uma chamada a api utilizando Promise, porque todas as chamadas que fizemos utilizando Axios ou fetch retornam uma Promise.
    return new Promise(resolve => {
        //setTimeOut para fingir que a api demorou 2 segundos para responder
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWY4ZGUzNDYwZTBlMjcyYzU1NTdhODk4IiwiY29tcGFueV9pZCI6IjVmOGRlMzQ2MGUwZTI3MmM1NTU3YTg3ZiIsImlhdCI6MTYwMzIxOTk3MSwiZXhwIjoxNjAzODI0NzcxfQ.hlLNPm-VuCph37CGBEMmwTFvnpiUeLZOhpeyv3COZq0',
                user: {
                    name: 'Ian Carlos Milan',
                    email: 'iancmilan@unochapeco.edu.br',
                }
            });
        }, 2000);
    });
}