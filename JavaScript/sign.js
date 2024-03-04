$("#sign").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var passwordtry = $("#passwordtry").val();

    var f = true;

    if(username == ""){
        $("#username ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = false;
    }

    if(password == ""){
        $("#password ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = false;
    }

    if(passwordtry == ""){
        $("#passwordtry ~ .focus-border").css({
            "width" : "100%",
            "background-color" : "#ff0000"
        });
        f = false;
    }

    if(f == false){
        $("#error").text("*məlumatlarınızı tam doldurun");
    }
    
    fetch("JavaScript/profiles.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        $.each(data, function(i, profile){
            if(profile.username == username /*&& profile.password == password*/){                
                $("#error").text("*bu istifadəçi adı istifadə olunub");
                f = false;
                return 0;
            }
        });
    });   
    
    if(f == true){
        let profile = {
            username : username,
            password : password
        }
 
        $.ajax({
            url: "workstation id=DigitalVolunteers.mssql.somee.com;packet size=4096;user id=NovruzoffDB;pwd=yagmur2005n;data source=DigitalVolunteers.mssql.somee.com;persist security info=False;initial catalog=DigitalVolunteers",
            type: "GET",
            success: function(response){
                console.log(response);
            }
        });
        
        fetch("JavaScript/profiles.json", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});