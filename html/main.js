const yourMonthlyAchivementsWork = (energy, time) => {

    let yourMonthlyAchivementsContent = `<tr>
    <td>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
            style="background-color:black;margin:15px 15px 0 15px;border-radius: 10px;min-width: 738px;max-width: 962px;" id="your_monthly_achivements">
            <tr>
                <td>
                    <p style="color: white;font-size: 30px; margin:70px 0 0 0;" align="center">Your Monthly</p>
                    <p style="color: white;font-size: 30px; margin:0 0 50px 0;" align="center">Achivements</p>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <img src="./Images/person.jpg" alt="person"
                        style="width:250px;height:auto;border-radius: 50%; margin-top: 10px;margin-bottom: 25px;">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="color: white;font-size: 16px;">BEST OUTPUT</p>
                    <p style="color: white;">
                        <font size="+7">${energy}</font><small>kj</small>
                    </p>
                    <hr style="width: 20%; margin: 25px auto 25px auto;">
                    <p style="color: white;font-size: 25px;">${time} Flexible Ride</p>
                    <p style="color: gray;font-size: 18px; line-height: 30px; margin-bottom: 30px;">Kendall
                        Toole<br>Taken 09/03/21 @ 3:21 AM ET</p>
                    <a style="text-decoration: none;color: orange;font-size: 16px;" href=" #">VIEW DETAILS</a>
                    <br>
                    <br>
                    <br>
                    <br>
                </td>
            </tr>
        </table>
    </td>
</tr>`;
    return yourMonthlyAchivementsContent;
}

const calenderTemplate = (name, monthYear, WorkoutDays, fewerDays) => {
    let str = `<tr>
    <td style="color: white;" align="center" id="month_review">
        <img style="margin-top:50px;border-radius: 7px;" src="Images/Logo.png" alt="Logo" width="50px">
        <b style="position: relative; bottom: 15px;color: white;">Flexnest</b>
        <p style="margin-bottom: 40px;font-size: 30px;">${name}</p>
        <b style="font-size: 25px;">${monthYear}<br><br><br></b>
    </td>
</tr>
<tr>
    <td>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
            style="background-color:black;margin:15px 15px 0 15px;border-radius: 10px;min-width: 738px;max-width: 962px;color: white;" id="workout">
            <tr>
                <td>
                    <p style="color: white;font-size: 30px; margin:70px 0 0 0;" align="center">You Worked Out
                        With Us</p>
                    <p style="color: white;font-size: 30px; margin:0 0 50px 0;" align="center">2 Days This
                        Month</p>
                </td>
            </tr>
            <tr>
                <td>
                    <table style="margin: auto;" cellspacing="20" cellpadding="20">
                        <caption align="top">
                            <!-- Here we have used the attribute
                        that is style and we have colored
                        the sentence to make it better
                        depending on the web page-->
                        </caption>
                        <thead>
                            <tr style="border-bottom: 1px solid #333333;">
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                                <th>Sun</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="margin-top: 30px;">
                <td align="center">
                    <img style="position: relative; top: 4px;width:32px; height:auto; " src="Images/upload.png"
                        alt="Arrow" />
                    <span style="font-size: 20px;">This is 2 fewer days than last month</span>
                    <p><br><br></p>
                </td>
            </tr>
        </table>
    </td>
</tr>`;
    return str;
}

const calender = (day, totalDays, dayInMonth, colorArr) => {
    let count = 1, flag = false, index = 0;
    var tableBody = document.getElementById('tableBody'), tr, td, row, cell;

    for (row = 0; row < totalDays / 7; row++) {
        tr = document.createElement('tr');
        for (cell = 0; cell < 7; cell++) {
            td = document.createElement('td');
            let cellNo = row * 7 + cell + 1;
            console.log(row * 7 + cell + 1, " ", dayInMonth, " ", count)


            if ((cellNo - day) === dayInMonth) flag = false;
            if (cellNo === day || flag) {
                if (colorArr[index] === count) {
                    td.style.backgroundColor = 'rgb(206, 131, 33)';
                    td.style.borderRadius = '40px';
                    index++;
                }
                td.innerHTML = count++;
                flag = true;
            }

            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

const yourMonthlyStatsWork = (totalWorkOuts, totalWorkOutsDifference, minutesWorkingOut, minutesWorkingOutDifference,
    milesTravelled, milesTravelledDifference, caloriesBurned, caloriesBurnedDifference) => {
    yourMonthlyStatsContent = `        <tr>
 <td>
     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
         style="background-color:black;margin:15px 15px 0 15px;border-radius: 10px;min-width: 738px;max-width: 962px;" id="your_monthly_stats">
         <tr>
             <td>
                 <p style="color: white;font-size: 30px; margin:70px 0 50px 0;" align="center">Your Monthly
                     Stats</p>
             </td>
         </tr>
         <tr>
             <td>
                 <table align="left" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%" style="border-right: 1px solid gray;">
                     <tr>
                         <td align="center">
                             <img style="width:64px; height: auto;" src="./Images/dumbbell.png"
                                 alt="Total Workouts">
                             <p style="color: gray; font-size: 20px;">Total Workouts</p>
                         </td>
                     </tr>
                 </table>
                 <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%">
                     <tr>
                         <td>
                             <span style="color:white;font-size: 40px;">${totalWorkOuts}</span>
                             <br>
                             <img src="./Images/upload.png" alt="arrow down"
                                 style="width:32px;height: auto;">
                             <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                 role="presentation" width="90%" style="color: white; font-size: 20px;">
                                 <tr>
                                     <td>
                                         ${totalWorkOutsDifference} from last
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         month
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <p style="border-bottom: 1px solid gray; margin:0 50px 0 50px"><br><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <p><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <table align="left" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%" style="border-right: 1px solid gray;">
                     <tr>
                         <td align="center">
                             <img style="width:64px; height: auto;" src="./Images/clock.png"
                                 alt="Minutes Working Out">
                             <p style="color: gray; font-size: 20px;">Minutes <br>Working Out</p>
                         </td>
                     </tr>
                 </table>
                 <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%">
                     <tr>
                         <td>
                             <span style="color:white;font-size: 40px;">${minutesWorkingOut}</span>
                             <br>
                             <img src="./Images/upload.png" alt="arrow down"
                                 style="width:32px;height: auto;">
                             <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                 role="presentation" width="90%" style="color: white; font-size: 20px;">
                                 <tr>
                                     <td>
                                         ${minutesWorkingOutDifference} from last
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         month
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <p style="border-bottom: 1px solid gray; margin:0 50px 0 50px"><br><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <p><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <table align="left" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%" style="border-right: 1px solid gray;">
                     <tr>
                         <td align="center">
                             <img style="width:64px; height: auto;" src="./Images/distance.png"
                                 alt="Miles travelled">
                             <p style="color: gray; font-size: 20px;">Miles Travelled</p>
                         </td>
                     </tr>
                 </table>
                 <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%">
                     <tr>
                         <td>
                             <span style="color:white;font-size: 40px;">${milesTravelled}</span>
                             <br>
                             <img src="./Images/upload.png" alt="arrow down"
                                 style="width:32px;height: auto;">
                             <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                 role="presentation" width="90%" style="color: white; font-size: 20px;">
                                 <tr>
                                     <td>
                                         ${milesTravelledDifference} from last
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         month
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <p style="border-bottom: 1px solid gray; margin:0 50px 0 50px"><br><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <p><br></p>
             </td>
         </tr>
         <tr>
             <td>
                 <table align="left" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%" style="border-right: 1px solid gray;">
                     <tr>
                         <td align="center">
                             <img style="width:64px; height: auto;" src="./Images/flame.png"
                                 alt="Calories Burned">
                             <p style="color: gray; font-size: 20px;">Calories Burned</p>
                         </td>
                     </tr>
                 </table>
                 <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                     role="presentation" width="48%">
                     <tr>
                         <td>
                             <span style="color:white;font-size: 40px;">${caloriesBurned}</span>
                             <br>
                             <img src="./Images/upload (1).png" alt="arrow up"
                                 style="width:32px;height: auto;">
                             <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                 role="presentation" width="90%" style="color: white; font-size: 20px;">
                                 <tr>
                                     <td>
                                         ${caloriesBurnedDifference} from last
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         month
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <p><br><br></p>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <p style="margin:0 50px 0 50px"><br><br></p>
             </td>
         </tr>
     </table>
 </td>
</tr>`;
    return yourMonthlyStatsContent;
};

const communityHighlightWork = (flexrowingtime, personName, airingDay, airingMonth, airingYear, airinghour, airingMinutes, airingMeridium) => {

    let communityHighlightContent = `        <tr>
    <td>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
            style="background-color:black;margin:15px;border-radius: 10px; min-width: 738px; max-width: 962px;" id="community_highlight">
            <tr>
                <td>
                    <p style="color: white;font-size: 30px; margin: 70px 0 30px 0;" align="center">Community
                        Highlights</p>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <img src="./Images/randomguy.jpg" alt="guy"
                        style="width:250px;height:auto;border-radius: 50%; margin-top: 30px;margin-bottom: 15px;">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <p style="color:white;font-size: 16px;margin-bottom: 20px;" align="center">HIGHEST RATED
                        RIDE</p>
                    <p style="color: white;font-size: 27px; margin-bottom: 10px;" align="center">${flexrowingtime} min
                        Flexrowing</p>
                    <p style="color: gray;font-size: 18px; line-height: 30px; margin-bottom: 30px;">${personName} <br>
                        Aired ${airingMonth}/${airingDay}/${airingYear} @ ${airinghour}:${airingMinutes}
                        ${airingMeridium} ET
                    </p>
                    <a style="text-decoration: none;color: orange;font-size: 16px;" href=" #">BOOKMARK CLASS</a>
                    <br>
                    <br>
                    <br>
                    <br>
                </td>
            </tr>
        </table>
    </td>
</tr>`;
    return communityHighlightContent;
};

(function () {

    let FirstElement = document.getElementById("email_layout");

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date('5 Oct 1998');          //not provide then take current month
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var day = firstDay.getDay();
    day = (day === 0) ? 7 : day
    let totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();


    let ReviewMonthNo = 23, name = 'Raunaq', WorkoutDays = 2, fewerDays = 2;
    let calenderTemplateStr = calenderTemplate(`${name}${ReviewMonthNo}'s`, `${month} ${year}`, WorkoutDays, fewerDays);

    let energy = 4, workoutTime = 20;
    let yourMonthlyAchivements = yourMonthlyAchivementsWork(energy, workoutTime);

    let totalWorkOuts = 4, totalWorkOutsDifference = -5, minutesWorkingOut = 6, minutesWorkingOutDifference = -6, milesTravelled = 0.1, milesTravelledDifference = -0.6, caloriesBurned = 24, caloriesBurnedDifference = 12;
    let yourMonthlyStats = yourMonthlyStatsWork(totalWorkOuts, totalWorkOutsDifference, minutesWorkingOut, minutesWorkingOutDifference,
        milesTravelled, milesTravelledDifference, caloriesBurned, caloriesBurnedDifference);

    let airingDate = new Date("September 15, 2021 01:30:00");
    let flexrowingtime = 20; personName = "Sam Yo", airingMonth = airingDate.getMonth() + 1, airingYear = (airingDate.getFullYear()) % 100, airingDay = airingDate.getDate(), airinghour = airingDate.getHours(), airingMinutes = airingDate.getMinutes();
    let airingMeridium = airingDate.getHours() < 13 ? 'AM' : 'PM';
    let communityHighlight = communityHighlightWork(flexrowingtime, personName, airingDay, airingMonth, airingYear, airinghour, airingMinutes, airingMeridium);

    let completeString = calenderTemplateStr + yourMonthlyAchivements + yourMonthlyStats + communityHighlight;
    FirstElement.innerHTML = completeString;


    calender(day, totalDays + day - 1, totalDays, [4, 6]);

})();