
                window.failed = {}; 
                window.failed.providers = []; 
                window.failed.providers.push(
                () => fetch('failed-0.json').then(res => res.json()),);window.failed.pages = 1;