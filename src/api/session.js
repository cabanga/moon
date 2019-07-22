// ========= ACTIONS OF USER AND ALL INTEGRATION =========
// =======================================================


// =================== SET TOKEN OF CURRENT USER =================
export function setToken (token) {
 try{
   localStorage.setItem('currentToken', token)
   console.log('current token save', token)
 } catch{
   console.log('same error to set current token !!!')
 }
}

// ================== SET OBJECT OF CURRENT USER ===============
export function setCurrentUser (currentUser) {
 try {
   localStorage.setItem('currentUser', JSON.stringify(currentUser))
   setCurrentUseriD (currentUser.uid)
 }catch {
   console.log('same error to set currentUser !!!')
 }
}

// ================== SET ID OF CURRENT USER ===============
export function setCurrentUseriD (uid) {
 try {
   localStorage.setItem('currentUserId', uid)
 }catch {
   console.log('same error to set currentUser Id !!!')
 }
}

// ================== TEST IF USER LOGGED ===============
export function userLogged () {
 try {
   if(localStorage.getItem('currentToken')){
     return true
   }
   else{
     return false
   }
 }catch {
   console.log('same error to set currentUser !!!')
 }
}
