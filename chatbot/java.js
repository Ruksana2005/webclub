function chat(){
    let quetions={
        "hello":"Hello Everyone!",
        "what is mining":"Mining is the extraction of valuable geological materials from the earth and other astronomical objects",
        "what do you mean by coal india":"Coal india limited is an indian central public sector undertaking under the ownership of the ministry of coal,governemnt of india",
        "what is coal mining":"Coal is a fosil fuel that is used to generate electricity ",
        "what do you mean by metal ore mining":"Metal ores are mined to extract metals such as iron copper,gold and aluminium",
        "what is the use of oil and gas extraction":"Oil and gas are fosil fuels that are used to generate electricity and power vehicles",
        "types of minings":"There are four types of minings:<br>surface mining<br>underground mining<br>placer mining<br>in-situ mining",
        "nonmetallic mineral mining":"Non metallic minerals include sand,gravel,limestone and clay.these minerals are used in a variety of products such as concreate,asphalt and ceramics",
        "economic benefits of mining":"Job creation<br>Government revenue<br>Export earning<br>Community development",
        "equipment used in mining industry":"Rotary drill rigs and rock drills",
        "tools used in mining":"hammers,chisels with pickaxes,shovels,minecarts and pans",
        "top mining countries in world":"China<br>Russia<br>Australia<br>Brazil<br>United states",
        "environmental impact of mining":"land degradation<br>water pollution<br>air pollution<br>noise pollution<br>habitat loss<br>Deforestation<br>Soil errosion<br>loss of biodiversity<br>Contamination of soil<br>ground water and surface water by chemicals emitted from the mining<br>Emission of carbon leads to climatic changes",
        "importance of mining":"Mined materials are needed to construct roads and hospitals<br>To build automobiles and houses<br>To make computers and satellites<br>To generate electricity",
        "advantages":"Resource abundance<br>Job creation<br>Technological innovation",
        "disadvantages":"Safety concerns<br>Environmental impacts<br>High costs<br>Resource depletion",
        "what is the use of financial assurance":"The Mining company/mine owner as a part of financial Assurance will open a fixed deposit ESCROW account with the coal controller organization as exclusive beneficiary prior to commencement of any activities on the land or project area of the mine and shall submit the same to the CCO(Coal Controller Organization) before the permisssion is given for opening the mine.",
        "what is the purpose of the land acquisition act":"To make sufficient arrangement for the resettlement and rehabilitation of affected households",
        "mineral concession(amendment)rules":"Rule 64A which states that how the fees and deposit is to be made has been amended namely<br>1.The government shall now charge simple intrest at the rate of 12%per annum which was earlier 24%per annum<br>The time frame of the 60th day has been omitted",
        "what is the meant by coal grading board":"Coal grading board constituted under section 3 of the coal grading board act in 1925",
        "appointed day":"The date on which Coal grading board act comes into force",
        "coal board":"Coal board established under section 4 of the coal mines about conservation and safety in 1952",
        "health impacts of coal mining":"1.Coal dust inhalation can cause black lung disease.<br>2.Cardiopulmonary disease,hypertension,COPD and kidney diseases are found in higher than normal rates in people which live near Coal mines<br>3.Miners also suffers include suffocation,gas poisioning,roof collapse and gas explosion<br>The diorders related to coal inhalation can be originated in genetic(DNA) damage<br>These are leading to reduced life expectancy",
        "impact of mining on aquatic animals":"Surface mining can affect fish and aquatic resources<br>errosion and sedimentation<br>Dewatering of wet lands<br>Diverting and channelizing streams<br>Habitat Alteration",
        "bye":"Okay!See you Soon...!<br>Have a nice day"
    };
    let user=document.getElementById("questionBox").value;
    document.getElementById("answerBox").innerHTML=user + "<br>";
    if(user in quetions){
        document.getElementById("answerBox").innerHTML=quetions[user] +"<br>";
    }
    else{
        document.getElementById("answerBox").innerHTML="sorry!not present in database";
    }
}