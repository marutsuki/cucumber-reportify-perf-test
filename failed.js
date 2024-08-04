
                window.failed = {}; 
                window.failed.providers = []; 
                window.failed.providers.push(
                () => fetch('failed-0.json').then(res => res.json()),() => fetch('failed-1.json').then(res => res.json()),() => fetch('failed-2.json').then(res => res.json()),() => fetch('failed-3.json').then(res => res.json()),() => fetch('failed-4.json').then(res => res.json()),() => fetch('failed-5.json').then(res => res.json()),);window.failed.pages = 534;