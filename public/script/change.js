var radioButtonSection = document.getElementsByName('bill_to');

for (var i = 0; i < radioButtonSection.length; i++) {
        radioButtonSection[i].onclick = function() {
            if(this.value === "company"){
                document.getElementById('company_name').value = ""
                document.getElementById('company_name').disabled = false
            }else{
                document.getElementById('company_name').value = ""
                document.getElementById('company_name').disabled = true
            }
        }
    }
let tourist_type = document.getElementById('tourist_type');
tourist_type.addEventListener('change', (e)=>{
    if(e.target.value === "tourist"){
        document.getElementById('wp_nd').textContent = ""
        document.getElementById('wp_nd').disabled = true
        document.getElementById('passport_number').disabled = false
    }
    else{
        document.getElementById('wp_nd').textContent = ""
        document.getElementById('passport_number').textContent = ""
        document.getElementById('wp_nd').disabled = false
        document.getElementById('passport_number').disabled = true
    }
})
let o = `<div style="width: 100%;display: flex; align-items: center;justify-content: space-between;" class="guest">\n            <input type="text" name="" id="">\n            <input type="number" name="" id="">\n            <select name="" id="">\n              \n<option value="">-- select one --</option>\n<option value="afghan">Afghan</option>\n<option value="albanian">Albanian</option>\n<option value="algerian">Algerian</option>\n<option value="american">American</option>\n<option value="andorran">Andorran</option>\n<option value="angolan">Angolan</option>\n<option value="antiguans">Antiguans</option>\n<option value="argentinean">Argentinean</option>\n<option value="armenian">Armenian</option>\n<option value="australian">Australian</option>\n<option value="austrian">Austrian</option>\n<option value="azerbaijani">Azerbaijani</option>\n<option value="bahamian">Bahamian</option>\n<option value="bahraini">Bahraini</option>\n<option value="bangladeshi">Bangladeshi</option>\n<option value="barbadian">Barbadian</option>\n<option value="barbudans">Barbudans</option>\n<option value="batswana">Batswana</option>\n<option value="belarusian">Belarusian</option>\n<option value="belgian">Belgian</option>\n<option value="belizean">Belizean</option>\n<option value="beninese">Beninese</option>\n<option value="bhutanese">Bhutanese</option>\n<option value="bolivian">Bolivian</option>\n<option value="bosnian">Bosnian</option>\n<option value="brazilian">Brazilian</option>\n<option value="british">British</option>\n<option value="bruneian">Bruneian</option>\n<option value="bulgarian">Bulgarian</option>\n<option value="burkinabe">Burkinabe</option>\n<option value="burmese">Burmese</option>\n<option value="burundian">Burundian</option>\n<option value="cambodian">Cambodian</option>\n<option value="cameroonian">Cameroonian</option>\n<option value="canadian">Canadian</option>\n<option value="cape verdean">Cape Verdean</option>\n<option value="central african">Central African</option>\n<option value="chadian">Chadian</option>\n<option value="chilean">Chilean</option>\n<option value="chinese">Chinese</option>\n<option value="colombian">Colombian</option>\n<option value="comoran">Comoran</option>\n<option value="congolese">Congolese</option>\n<option value="costa rican">Costa Rican</option>\n<option value="croatian">Croatian</option>\n<option value="cuban">Cuban</option>\n<option value="cypriot">Cypriot</option>\n<option value="czech">Czech</option>\n<option value="danish">Danish</option>\n<option value="djibouti">Djibouti</option>\n<option value="dominican">Dominican</option>\n<option value="dutch">Dutch</option>\n<option value="east timorese">East Timorese</option>\n<option value="ecuadorean">Ecuadorean</option>\n<option value="egyptian">Egyptian</option>\n<option value="emirian">Emirian</option>\n<option value="equatorial guinean">Equatorial Guinean</option>\n<option value="eritrean">Eritrean</option>\n<option value="estonian">Estonian</option>\n<option value="ethiopian">Ethiopian</option>\n<option value="fijian">Fijian</option>\n<option value="filipino">Filipino</option>\n<option value="finnish">Finnish</option>\n<option value="french">French</option>\n<option value="gabonese">Gabonese</option>\n<option value="gambian">Gambian</option>\n<option value="georgian">Georgian</option>\n<option value="german">German</option>\n<option value="ghanaian">Ghanaian</option>\n<option value="greek">Greek</option>\n<option value="grenadian">Grenadian</option>\n<option value="guatemalan">Guatemalan</option>\n<option value="guinea-bissauan">Guinea-Bissauan</option>\n<option value="guinean">Guinean</option>\n<option value="guyanese">Guyanese</option>\n<option value="haitian">Haitian</option>\n<option value="herzegovinian">Herzegovinian</option>\n<option value="honduran">Honduran</option>\n<option value="hungarian">Hungarian</option>\n<option value="icelander">Icelander</option>\n<option value="indian">Indian</option>\n<option value="indonesian">Indonesian</option>\n<option value="iranian">Iranian</option>\n<option value="iraqi">Iraqi</option>\n<option value="irish">Irish</option>\n<option value="israeli">Israeli</option>\n<option value="italian">Italian</option>\n<option value="ivorian">Ivorian</option>\n<option value="jamaican">Jamaican</option>\n<option value="japanese">Japanese</option>\n<option value="jordanian">Jordanian</option>\n<option value="kazakhstani">Kazakhstani</option>\n<option value="kenyan">Kenyan</option>\n<option value="kittian and nevisian">Kittian and Nevisian</option>\n<option value="kuwaiti">Kuwaiti</option>\n<option value="kyrgyz">Kyrgyz</option>\n<option value="laotian">Laotian</option>\n<option value="latvian">Latvian</option>\n<option value="lebanese">Lebanese</option>\n<option value="liberian">Liberian</option>\n<option value="libyan">Libyan</option>\n<option value="liechtensteiner">Liechtensteiner</option>\n<option value="lithuanian">Lithuanian</option>\n<option value="luxembourger">Luxembourger</option>\n<option value="macedonian">Macedonian</option>\n<option value="malagasy">Malagasy</option>\n<option value="malawian">Malawian</option>\n<option value="malaysian">Malaysian</option>\n<option value="maldivan">Maldivan</option>\n<option value="malian">Malian</option>\n<option value="maltese">Maltese</option>\n<option value="marshallese">Marshallese</option>\n<option value="mauritanian">Mauritanian</option>\n<option value="mauritian">Mauritian</option>\n<option value="mexican">Mexican</option>\n<option value="micronesian">Micronesian</option>\n<option value="moldovan">Moldovan</option>\n<option value="monacan">Monacan</option>\n<option value="mongolian">Mongolian</option>\n<option value="moroccan">Moroccan</option>\n<option value="mosotho">Mosotho</option>\n<option value="motswana">Motswana</option>\n<option value="mozambican">Mozambican</option>\n<option value="namibian">Namibian</option>\n<option value="nauruan">Nauruan</option>\n<option value="nepalese">Nepalese</option>\n<option value="new zealander">New Zealander</option>\n<option value="ni-vanuatu">Ni-Vanuatu</option>\n<option value="nicaraguan">Nicaraguan</option>\n<option value="nigerien">Nigerien</option>\n<option value="north korean">North Korean</option>\n<option value="northern irish">Northern Irish</option>\n<option value="norwegian">Norwegian</option>\n<option value="omani">Omani</option>\n<option value="pakistani">Pakistani</option>\n<option value="palauan">Palauan</option>\n<option value="panamanian">Panamanian</option>\n<option value="papua new guinean">Papua New Guinean</option>\n<option value="paraguayan">Paraguayan</option>\n<option value="peruvian">Peruvian</option>\n<option value="polish">Polish</option>\n<option value="portuguese">Portuguese</option>\n<option value="qatari">Qatari</option>\n<option value="romanian">Romanian</option>\n<option value="russian">Russian</option>\n<option value="rwandan">Rwandan</option>\n<option value="saint lucian">Saint Lucian</option>\n<option value="salvadoran">Salvadoran</option>\n<option value="samoan">Samoan</option>\n<option value="san marinese">San Marinese</option>\n<option value="sao tomean">Sao Tomean</option>\n<option value="saudi">Saudi</option>\n<option value="scottish">Scottish</option>\n<option value="senegalese">Senegalese</option>\n<option value="serbian">Serbian</option>\n<option value="seychellois">Seychellois</option>\n<option value="sierra leonean">Sierra Leonean</option>\n<option value="singaporean">Singaporean</option>\n<option value="slovakian">Slovakian</option>\n<option value="slovenian">Slovenian</option>\n<option value="solomon islander">Solomon Islander</option>\n<option value="somali">Somali</option>\n<option value="south african">South African</option>\n<option value="south korean">South Korean</option>\n<option value="spanish">Spanish</option>\n<option value="sri lankan">Sri Lankan</option>\n<option value="sudanese">Sudanese</option>\n<option value="surinamer">Surinamer</option>\n<option value="swazi">Swazi</option>\n<option value="swedish">Swedish</option>\n<option value="swiss">Swiss</option>\n<option value="syrian">Syrian</option>\n<option value="taiwanese">Taiwanese</option>\n<option value="tajik">Tajik</option>\n<option value="tanzanian">Tanzanian</option>\n<option value="thai">Thai</option>\n<option value="togolese">Togolese</option>\n<option value="tongan">Tongan</option>\n<option value="trinidadian or tobagonian">\n  Trinidadian or Tobagonian\n</option>\n<option value="tunisian">Tunisian</option>\n<option value="turkish">Turkish</option>\n<option value="tuvaluan">Tuvaluan</option>\n<option value="ugandan">Ugandan</option>\n<option value="ukrainian">Ukrainian</option>\n<option value="uruguayan">Uruguayan</option>\n<option value="uzbekistani">Uzbekistani</option>\n<option value="venezuelan">Venezuelan</option>\n<option value="vietnamese">Vietnamese</option>\n<option value="welsh">Welsh</option>\n<option value="yemenite">Yemenite</option>\n<option value="zambian">Zambian</option>\n<option value="zimbabwean">Zimbabwean</option>\n\n            </select>\n            <input type="file">\n            <a href="">Remove</a>\n          </div>`