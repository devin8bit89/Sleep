function showNotification(){

const notification = new Notification ("It's 2AM, did you sleep?", { body: "If not, try to sleep as soon as possible", icon: "img.jpg"

});

}

if(Notification.permission === "granted") {

showNotification();

}else if (Notification.permission != "denied") {

Notification.requestPermission().then(permission => {

if(permission === "granted") {

showNotification();

}

});
}

