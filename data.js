
                window.data = {}; 
                window.data.providers = []; 
                window.data.providers.push(
                () => fetch('data-0.json').then(res => res.json()),() => fetch('data-1.json').then(res => res.json()),() => fetch('data-2.json').then(res => res.json()),() => fetch('data-3.json').then(res => res.json()),() => fetch('data-4.json').then(res => res.json()),() => fetch('data-5.json').then(res => res.json()),() => fetch('data-6.json').then(res => res.json()),);window.data.pages = 3328;