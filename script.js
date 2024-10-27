// دالة تسجيل الدخول
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");

    // تحقق من صحة البريد الإلكتروني وكلمة المرور
    if (email === "User" && password === "123") {
        loginError.textContent = "";
        showPage("assessmentPage");
    } else {
        loginError.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
    }
}

// دالة لإظهار الصفحة المطلوبة
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// دالة للتحقق من زر Enter
document.addEventListener('keydown', function(event) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (event.key === "Enter") {
        if (document.getElementById("loginPage").classList.contains("active")) {
            if (document.activeElement === emailInput) {
                passwordInput.focus(); // الانتقال إلى حقل كلمة السر
            } else {
                login(); // تسجيل الدخول
            }
        }
    }
});

// دالة لإرسال التقييم
function submitAssessment() {
    const mood = document.querySelector('input[name="mood"]:checked');
    const resultMessage = document.getElementById("resultMessage");

    if (mood) {
        resultMessage.textContent = `أنت تشعر بـ "${mood.value}" اليوم.`;
        showPage("resultPage");
    } else {
        alert("يرجى اختيار شعورك اليوم.");
    }
}

// دالة لإعادة التقييم
function restart() {
    showPage("assessmentPage");
}
