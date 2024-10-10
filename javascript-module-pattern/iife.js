export const someModule = (function(){
    const logMe = (message) => console.log(`[${Date.now()}] We will log you: ${message}`); 
    return {
        logMe
    }
})();