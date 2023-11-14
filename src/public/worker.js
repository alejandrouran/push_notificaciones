console.log('Service Worker');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://es.m.wikipedia.org/wiki/Archivo:Fedora_icon_%282021%29.svg'
    });

});