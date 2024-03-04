$("#login").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();

    var f = false;

    if(username == "" && password == ""){
        $("#username ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        $("#password ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = true;
        $("#error").text("*istifadəçi adınızı və şifrənizi daxil edin");
    }

    else if(username == ""){
        $("#username ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = true;
        $("#error").text("*istifadəçi adınızı daxil edin");
    }

    else if(password == ""){
        $("#password ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = true;
        $("#error").text("*şifrənizi daxil edin");
    }
    
    fetch("JavaScript/profiles.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        $.each(data, function(i, profile){
            if(profile.username == username && profile.password == password){
                localStorage.setItem('user', JSON.stringify(profile));
                if(profile.role == "admin"){
                    window.location.href = "/Views/Admin/AdminPanel.html";
                }
                else if(profile.role == "user"){
                    window.location.href = "UserPanel.html";
                }
                f = true;
                return 0;
            }
        });
        if(f == false){
            $("#error").text("*istifadəçi adı və ya şifrə yanlışdır");
        }
    });    
});
