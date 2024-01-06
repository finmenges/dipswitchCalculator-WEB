document.addEventListener("DOMContentLoaded", function(){
    const txtInputField = document.getElementById("txt");
    const infoX = document.getElementById("info");

    function swapBinary(binaryString) {
        let binaryStringArray = binaryString.split('');
        binaryStringArray = binaryStringArray.reverse();
        return binaryStringArray.join('');
    }

    function writeBinaryToSwitches(reversedBinaryString) {
        console.log(reversedBinaryString);
        for (let i = 1; i <= 9; i++) {
            if (reversedBinaryString[i - 1] === '1') {
                document.getElementById("u" + i.toString()).disabled = false;
                document.getElementById("d" + i.toString()).disabled = true;
            } else {
                document.getElementById("u" + i.toString()).disabled = true;
                document.getElementById("d" + i.toString()).disabled = false;
            }
        }
    }

    function update() {
        let channelBinary = Number(txtInputField.value).toString(2);
        let dipSwitchCodeString = swapBinary(channelBinary);
        writeBinaryToSwitches(dipSwitchCodeString);
    }

    update();

    txtInputField.addEventListener("input", ()=>{
        if (txtInputField.value.length!==0) {
            if (txtInputField.value>511) {
                txtInputField.value = 511;
                infoX.innerText = "Number must be between 1 and 511!";
                update();
            }
            else if (txtInputField.value<1) {
                txtInputField.value = 1;
                infoX.innerText = "Number must be between 1 and 511!";
                update();
            }
            else {
                infoX.innerText = "Limited to 511 Channels.";
                update();
            }
        }
        else {
            update();
        }
    })
});
