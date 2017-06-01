function playSong(){
    var friendDiv;
    var friendName;

    var friends = ['Bill','Bob','Jim','Jimmy','Charles'];
    for (var i = 0; i< friends.length; i++){
        friendDiv = document.createElement('div');
        friendDiv.className = 'friend';
        friendName = document.createElement('h3');
        friendName.innerText = friends[i].toUpperCase() + ": ";
        document.body.appendChild(friendDiv);
        var para = document.getElementsByClassName('friend');
        para[i].appendChild(friendName);
        for (var j = 99; j > 0; j--){
            var song = document.createElement('p');
            if(j>2){
                song.innerText = " " + j + " lines of code in the file "+j+" lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more lines of code in the file.";
            }else if(j === 2){
                song.innerText = " " + j + " lines of code in the file " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more line of code in the file.";
            }else{
            song.innerText = " " + j +  " line of code in the file, " + j + " line of code,  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.";           
            }
        para[i].appendChild(song);
        }
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', function(){
        playSong();
    })
})