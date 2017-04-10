/*********************************************************************************************************/
/* TAXI
/*********************************************************************************************************/

var taxiOn = turnOn();
var listingID, capitalizedHeader, listingDate, firstParagraph, songLength, keywords, videoExamplesList;
var listingItemsArray = [];
var listingItemsArrayCopy = [];



function updateList(item, action){
	
	
	
}




function createListingItemList(listingItemsArray, remove){
	
	listingItemsArray = listingItemsArray;
	var len = listingItemsArray.length;
	var theItems = listingItemsArray[0] + "\t";

	for (var i=1; i<len; i++) {	    
		if((listingItemsArray[i] != undefined) && ( i != remove)){
			theItems += listingItemsArray[i] + "\t";		
		}
	}	
	return theItems;
}

function detect_button(e)
{	
			
	if(taxiOn === 1)
		{
		    e = e || window.event;

		    if (e.which == null){button = (e.button < 2) ? 'left' :((e.button == 4) ? 'middle' : 'right');}
		    else{button = (e.which < 2) ? 'left' :((e.which == 2) ? 'middle' : 'right');}

			var thisDiv = e.target.parentNode;
			var thisDivName = thisDiv.className;
			var listingIDFull = thisDiv.getAttribute('id');
			//var listingID = listingIDFull.replace('listing-','');

			function hasClass( elem, klass ) {
			     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
			}

	
			if((hasClass(thisDiv, "listing-item") == true) || (hasClass(thisDiv, "listing") == true)){
		
					var keywords = /EXCLUSIVE|Exclusive|NON-EXCLUSIVE|Non-Exclusive|deal|engaging|Stinger|Non-Faded\/Buttoned|Buttoned|Non-Faded|stinger|buttoned|non-faded|tension|drama|suspense|edgy|gritty/g;
		
					var numberOfChildren = thisDiv.getElementsByTagName('p').length;
					var lastParagraphIndex = numberOfChildren-2;
					firstParagraph = thisDiv.getElementsByTagName('p')[0].innerHTML;
					var lastParagraph = thisDiv.getElementsByTagName('p')[lastParagraphIndex].innerHTML;
					var listingHeaderFull = thisDiv.getElementsByTagName('p')[0].innerHTML;
					var listingHeaderSubCopy = thisDiv.getElementsByTagName('p')[0].innerHTML;
					capitalizedHeader = listingHeaderFull.match(/\b[A-Z/\\&]+\b/g).toString();
	
					var regex = new RegExp(',', 'g')
					capitalizedHeader = capitalizedHeader.replace(regex,' ');
					capitalizedHeader = capitalizedHeader.replace('NON',' ');
	
					var removeBoldID = thisDiv.getElementsByTagName('b')[0].innerHTML;
					listingID = removeBoldID.replace('TAXI','');
	
					var regexB = new RegExp(removeBoldID, 'g')
					lastParagraph = lastParagraph.replace(regexB,' ');
					lastParagraph = lastParagraph.replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, "");
	
					var validDays = /Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/;
					var validMonths = /January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Aug|Sept|Oct|Nov|Dec/;
					var validYears = /2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030/;
					var validSongLength = /minutes|seconds/;
			
					var str = lastParagraph;
					var day = '';
					var month = '';
					var year = '';
					listingDate = '';
					var listingCopy = '';	
					var matchAcceptedDays = str.match(validDays);
					var matchAcceptedMonth = str.match(validMonths);
					var matchAcceptedYear = str.match(validYears);
					var matchAcceptedSongLength = [];
					var matchKeywords = [];
					var dateAndYear = '';
					var songLengthTime = '';
					var songLengthNumbers = '';
					var songLength = '';
					var keyword = [];
					var videoExamplesList = [];
					
					for(i=0;i<=lastParagraphIndex;i++){
						//console.log("Paragraph " + i);// + ": " + thisDiv.getElementsByTagName('p')[i].innerHTML);
						p = thisDiv.getElementsByTagName('p')[i].innerHTML;
						matchAcceptedSongLength[i] = p.match(validSongLength);
						
						if (matchAcceptedSongLength[i] != null){
						   // console.log("Contains accepted song length: " + matchAcceptedSongLength[i]);  
							songLengthTime = matchAcceptedSongLength[i];   
							songLengthNumbers = p.substring(0, p.lastIndexOf(songLengthTime));
							songLengthNumbers = songLengthNumbers.replace('All submissions should be',' ');
							songLengthNumbers = songLengthNumbers.replace('Your submissions should be',' ');
							songLength = songLengthNumbers + songLengthTime;
						} 
						else {
							//console.log("Does not contain song length word: ");
						}
						
					}
				
				
					//var x = new RegExp("^(http|https)://(youtu|www.youtube|vimeo|youtube)\.(be|com)/[A-Za-z0-9\?&=]+$")
					//x.test(thisDiv);
					videoExamples = thisDiv.getElementsByTagName('a');
					if(videoExamples.length > 0){
						videoExamplesList = videoExamples[0].innerHTML + "\n\t\t\t\t\t\t" + videoExamples[1].innerHTML + "\n\t\t\t\t\t\t" + videoExamples[2].innerHTML;
					}
					else
					{
						videoExamplesList = "No Examples Given.";
					}
					

					if (matchAcceptedDays !== null){
					    //console.log("Contains accepted word: " + matchAcceptedDays[0]);  
						day = matchAcceptedDays[0];    
					} else {//console.log("Does not contain accepted word: " + matchAcceptedDays[0]);
					}

					if (matchAcceptedMonth !== null){
					    //console.log("Contains accepted word: " + matchAcceptedMonth[0]);  
						month = matchAcceptedMonth[0];    
					} else {//console.log("Does not contain accepted word: " + matchAcceptedMonth[0]);
					}
	
					if (matchAcceptedYear !== null) {
					    //console.log("Contains accepted word: " + matchAcceptedYear[0]);  
						year = matchAcceptedYear[0];    
					} else {//console.log("Does not contain accepted word: " + matchAcceptedYear[0]);
					}
					
					
					for(i=0;i<=lastParagraphIndex;i++){
						//console.log("Keyword Paragraph " + i);// + ": " + thisDiv.getElementsByTagName('p')[i].innerHTML);
						p = thisDiv.getElementsByTagName('p')[i].innerHTML;
						matchKeywords[i] = p.match(keywords);
						
						if (matchKeywords[i] != null){
						   // console.log("Contains accepted song length: " + matchAcceptedSongLength[i]);  
						   keyword[i] = matchKeywords[i]; 
						   console.log("keyword: " + i ); //+ " " + matchKeywords[i]);
						} 
						else {
							keyword[i] = "No keywords.";
						}
						
					}

	
					dateAndYear = lastParagraph.substr(str.indexOf(month) + 6);
					listingDate = day + ", " + month + ", " + dateAndYear;
					keywords = keyword[0] + ", " + keyword[1] + ", " + keyword[2];
					listingItemsArray = [listingID, capitalizedHeader, listingDate, firstParagraph, songLength , keywords, videoExamplesList];
					listingCopy = createListingItemList(listingItemsArray); //listingID + "\t" + capitalizedHeader + "\t" + listingDate + "\t" + firstParagraph + "\t" + keywords + "\t" + videoExamplesList;
					alert(listingCopy);
				}
				else
				{
					//alert("Not on a listing!");
				}	
		}
	}	
	
var theListingsID = document.getElementById('listings');
var theDiv = document.createElement( 'div' ); 
//theDiv.appendChild( document.createTextNode('TAXI Listing Assistant'));
theDiv.style.position="fixed";theDiv.style.zIndex='5000';theDiv.style.left='5px';theDiv.style.top='300px';theDiv.style.border='solid 3px #ffd200'; theDiv.style.backgroundColor='#555'; 
theDiv.style.color='#ffd200';
theDiv.style.width='200px';
theDiv.style.height='300px';
theDiv.style.padding='20px';
theDiv.style.display='inline-block';
var radioFragment = document.createElement('div');

radioFragment.innerHTML = '<img src = "http://www.taximusic.com/images/new/logo.png" width="145px"/><br>Listing Assistant <center><div id="radioBtnsContainer"><hr><input type="radio" name="onoff" value="on" id="radOn" checked><label for="radOn">ON</label><input type="radio" name="onoff" value="off" id="radOff"><label for="radOff">OFF</label></div></center><hr><div id="listingItems">Listing Items:<br><input type="checkbox" name="listingItems" value="0" checked>Listing #<br><input type="checkbox" name="listingItems" value="1" checked>Title<br><input type="checkbox" name="listingItems" value="2" checked>Due Date<br><input type="checkbox" name="listingItems" value="3" checked>Description<br><input type="checkbox" name="listingItems" value="4" checked>Length<br><input type="checkbox" name="listingItems" value="5" checked>Keywords<br><input type="checkbox" name="listingItems" value="6" checked>Examples<br></div>';

theDiv.appendChild(radioFragment);
document.body.appendChild( theDiv ); void(0);

var radioBtnsContainerDiv = document.getElementById('radioBtnsContainer');
var radioOn = document.getElementById('radOn');
var radioOff = document.getElementById('radOff');
radioOn.style.display='inline-block';
radioOff.style.display='inline-block';
radioOn.style.width='1em';
radioOff.style.width='1em';
radioOn.style.height='1.2em';
radioOff.style.height='1.2em';
radioOff.style.marginLeft='.9em';
radioOn.onclick = turnOn;
radioOff.onclick = turnOff;

var label1 = theDiv.getElementsByTagName('label')[0];
var label2 = theDiv.getElementsByTagName('label')[1];
label1.style.display='inline-block';
label2.style.display='inline-block';
label1.style.height='1.8em';
label2.style.height='1.8em';
label1.style.fontSize='1.2em';
label2.style.fontSize='1.2em';
label1.style.textAlign='left';
label2.style.textAlign='left';
label1.style.marginTop= '-5px';
label2.style.marginTop= '-5px';
label1.style.verticalAlign = top;
label2.style.verticalAlign = top;
radioBtnsContainerDiv.style.width='100%';
radioBtnsContainerDiv.style.display='inline-block';


// get reference to element containing toppings checkboxes
var listingItemsDiv = document.getElementById('listingItems');

// get reference to input elements in toppings container element
var items = listingItemsDiv.getElementsByTagName('input');
var len = items.length;

// assign function to onclick property of each checkbox
for (var i=0; i<len; i++) {
    if ( items[i].type === 'checkbox' ) {
		 //console.log("check box: " + i);
        items[i].onclick = function() {
			//alert(this.checked);
			//createListingItemList(listingItemsArray, this.value);
        }
    }
}


function turnOn(){
	taxiOn = 1;
	//alert("taxiOn: " + taxiOn);
	return taxiOn;
}

function turnOff(){
	taxiOn = 0;
	//alert("taxiOn: " + taxiOn);
	return taxiOn;
}


theListingsID.onmousedown = detect_button;
if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);