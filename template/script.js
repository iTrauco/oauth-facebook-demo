// // http://bit.ly/2IwShaB @ 10:54; approx
// document.getElementById('loginbtn').addEventListener('click', loginWithFacebook, false)

// // http://bit.ly/2IwShaB @ 11:08; approx
// function loginWithFacebook() {
//     // e.preventDefault()
//     FB.login( response => {
//         console.log(response)
//     }, { scope: 'public_profile,email' })
//     return false
// }

// http://bit.ly/2IwShaB @ 05:51; approx
function fbSDKLoaded() {
    // http://bit.ly/2IwShaB @ 06:06; approx
    FB.getLoginStatus(response => {
        // console.log(response)
        
        //http://bit.ly/2IwShaB @ 07:46; approx
        if(response.status == 'not_authorized') {
            loginWithFacebook = e => {
                e.preventDefault()
                FB.login( response => {
                console.log(response)
                }, { scope: 'public_profile,email' })
                return false
            }
        }
    })

}