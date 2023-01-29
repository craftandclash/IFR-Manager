var Trafics = [
    [
   "t",
   "FR",
   false,
   false,
   false
],
[
    "v2",
     "EN",
     false,
     false,
     false
]
]


function Update(){
    let List = document.getElementById("trafics");
    List.innerHTML="";
    showTrafics(Trafics);
}

function updateValue(e) {
    Trafics[e.target.getAttribute("index")][0]=e.target.value;
    Update();
  }



function switchLang(id){

    if(Trafics[id][1]=="FR"){
        Trafics[id][1]="EN";

    }else{
        Trafics[id][1]="FR";
    }

    Update();
}

function switchCheckBox(id,idC){
    if(Trafics[id][2+idC]){
        Trafics[id][2+idC]=false;
    }else{
        Trafics[id][2+idC]=true;
    }

    Update();
}


function destroyTrafic(id){
    Trafics.splice(id,1);
    Update();
}

function addTrafic(){
    Trafics.push(["","FR",false,false,false]);
    Update();
}

function showTrafics(Trafics){
    let List = document.getElementById("trafics");
    for(var i=0; i<Trafics.length;i++ ){
        var Trafic = document.createElement('article');
        Trafic.setAttribute('class','TraficCard');


        var leftTraficCard = document.createElement('div');
        leftTraficCard.setAttribute('class','left-traficCard')

        var CallSign = document.createElement('input');


        var LangSelect = document.createElement('button');
        if(Trafics[i][1]=="FR"){
            LangSelect.innerHTML='<img class = "flag-pic" src="fr-flag.jpg">';
            LangSelect.setAttribute('langue','FR');
        }else{
            LangSelect.innerHTML='<img class = "flag-pic" src="en-flag.jpg">';
            LangSelect.setAttribute('langue',"EN");
        }

        LangSelect.setAttribute("OnClick","switchLang("+i+")");

        var DelButton = document.createElement('button');
  
        DelButton.textContent="Supprimer";

        DelButton.setAttribute("OnClick","destroyTrafic("+i+")");

        CallSign.setAttribute("Placeholder","call sign");
        CallSign.setAttribute("type","text");
        CallSign.setAttribute("index",i);
        CallSign.value=Trafics[i][0];
        CallSign.addEventListener('change', updateValue);
        //"upadateCallSign("+i,","+CallSign.value+")"
        leftTraficCard.appendChild(CallSign);
        leftTraficCard.appendChild(LangSelect);

        leftTraficCard.appendChild(DelButton);
        
        rightTraficCard=document.createElement("div");
        rightTraficCard.setAttribute("class","right-traficCard");

        H3I=document.createElement("h3");
        H3I.textContent='I'; 
        H3R=document.createElement("h3");
        H3R.textContent='R'; 
        H3T=document.createElement("h3");
        H3T.textContent='T';
        pI=document.createElement("p");
        pI.textContent='Initial clearence'; 
        pR=document.createElement("p");
        pR.textContent='Taxi clearence'; 
        pT=document.createElement("p");
        pT.textContent='Transferd';

        //Checkbox

        CI=document.createElement("input");
        CI.setAttribute('type','checkbox');
        CI.setAttribute('class','checkbox');
        CI.setAttribute('letter',0);
        CI.setAttribute("OnClick","switchCheckBox("+i+","+0+")")
        if(Trafics[i][2]){CI.setAttribute("checked","true")}

        CR=document.createElement("input");
        CR.setAttribute('type','checkbox');
        CR.setAttribute('class','checkbox');
        CR.setAttribute('letter',1);
        CR.setAttribute("OnClick","switchCheckBox("+i+","+1+")")
        if(Trafics[i][3]){CR.setAttribute("checked","true")}

        CT=document.createElement("input");
        CT.setAttribute('type','checkbox');
        CT.setAttribute('class','checkbox');
        CT.setAttribute('letter',2);
        CT.setAttribute("OnClick","switchCheckBox("+i+","+2+")");
        if(Trafics[i][4]){CT.setAttribute("checked","true")}

        iCheckboxDIV=document.createElement("div");
        iCheckboxDIV.setAttribute("class","I-Checkbox-DIV");
        iCheckboxDIV.appendChild(H3I);
        iCheckboxDIV.appendChild(CI);
        iCheckboxDIV.appendChild(pI);

        RCheckboxDIV=document.createElement("div");
        RCheckboxDIV.setAttribute("class","R-Checkbox-DIV");
        RCheckboxDIV.appendChild(H3R);
        RCheckboxDIV.appendChild(CR);
        RCheckboxDIV.appendChild(pR);

        TCheckboxDIV=document.createElement("div");
        TCheckboxDIV.setAttribute("class","T-Checkbox-DIV");
        TCheckboxDIV.appendChild(H3T);
        TCheckboxDIV.appendChild(CT);
        TCheckboxDIV.appendChild(pT);

        rightTraficCard.appendChild(iCheckboxDIV);
        rightTraficCard.appendChild(RCheckboxDIV);
        rightTraficCard.appendChild(TCheckboxDIV);

        Trafic.appendChild(leftTraficCard);
        Trafic.appendChild(rightTraficCard);

        List.appendChild(Trafic);

    }
}

showTrafics(Trafics);