document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mainHeader = document.querySelector('.main-header');
    
    // 檢查元素是否存在
    if (menuToggle && closeMenu && mainHeader) {
        
        // 開啟選單
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止點擊漢堡選單時關閉
            mainHeader.classList.add('menu-open');
            document.body.style.overflow = 'hidden'; // 鎖定背景滾動
        });

        // 關閉選單
        closeMenu.addEventListener('click', () => {
            mainHeader.classList.remove('menu-open');
            document.body.style.overflow = ''; // 恢復背景滾動
        });
        
        // 點擊選單外部關閉 (可選)
        document.addEventListener('click', (e) => {
            if (mainHeader.classList.contains('menu-open') && !e.target.closest('.side-menu') && !e.target.closest('.menu-toggle')) {
                mainHeader.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    }
});