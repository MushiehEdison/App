document.addEventListener('DOMContentLoaded', function() {
    var popoverTrigger = document.getElementById('popoverButton');
    
    var popoverContent = `
        <div class="popover-content">
            <div class="notif">
                <div class="d-flex align-items-center">
                    <img src="en.jpg" class="notification-avatar" alt="profile">
                    <span class="mx-2" style="font-size: 0.9rem; font-weight: 700;">@tanjiro</span>
                    <div class="time">1d ago</div>
                </div>
                <div class="Message">
                    <p>Your nigga</p>
                </div>                  
            </div>
            <div class="notif">
                <div class="d-flex align-items-center">
                    <img src="thorfinn.jpg" class="notification-avatar" alt="profile">
                    <span class="mx-2" style="font-size: 0.9rem; font-weight: 700;">@tanjiro</span>
                    <div class="time">1d ago</div>
                </div>
                <div class="Message">
                    <p>Great job on the video! Can&#39;t wait for more.</p>
                </div>                  
            </div>
            <div class="notif">
                <div class="d-flex align-items-center">
                    <img src="Jjk.jpg" class="notification-avatar" alt="profile">
                    <span class="mx-2" style="font-size: 0.9rem; font-weight: 700;">@tanjiro</span>
                    <div class="time">1d ago</div>
                </div>
                <div class="Message">
                    <p>Well done! Your content is top-notch.</p>
                </div>                  
            </div>
            <div class="notif">
                <div class="d-flex align-items-center">
                    <img src="M.png" class="notification-avatar" alt="profile">
                    <span class="mx-2" style="font-size: 0.9rem; font-weight: 700;">@tanjiro</span>
                    <div class="time">1d ago</div>
                </div>
                <div class="Message">
                    <p>Nice video! Keep up the good work.</p>
                </div>                  
            </div>
        </div>
    `;
    
    var popover = new bootstrap.Popover(popoverTrigger, {
        content: popoverContent,
        html: true
    });
});