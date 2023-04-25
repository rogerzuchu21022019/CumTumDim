`1 CallbackUrl phải trùng với link redirectUrl trong GoogleConsoleAPI webClient`

`2 Để gọi được link : auth/google và auth/google/callback trên web thì trong Login.js phải để router.get chứ không được để app.get trong file ManageMiddleware`

`3 Chạy web thì create user được trong passport.js`

`4 Để sử dụng clientID nếu có sử dụng Firebase thì vô Google Console API rồi tạo ra thêm webClient và sử dụng link này, không sử dụng trong phần google sign in của Firebase`





