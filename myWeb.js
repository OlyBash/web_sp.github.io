//定位登录按钮
const submission = document.querySelector('.box .right form .submit');
//默认用户名,后续有机会再更新自定义用户名功能
const userName = document.querySelector('.box .right input:first-child');
userName.value = 'OlyBash';
// console.log(userName);

//默认密码87654321
const password = '87654321';
//按下登录按钮后触发事件
submission.addEventListener('click', () => {
  const Psd = document.querySelector('.box .right form input:nth-child(2)').value;
  if (Psd.trim() === '') alert("You haven't entered your password yet");
  else if (Psd === password) location.href = "./myWeb2.html";
  else alert('You entered an incorrect password,please try again.');
});

//获取用户密码框,监听键盘输入
const userPsd = document.querySelector('.box .right form input:nth-child(2)');
userPsd.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    submission.click();
  }
});