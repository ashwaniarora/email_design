        let emailLayout = document.getElementById("email_layout");

        emailLayout.innerHTML = emailLayoutWork();


        function emailLayoutWork() {
            let emailLayoutContent = `        <tr>
            <td style="color: white;" align="center" id="month_review">
                <img style="margin-top:50px;border-radius: 7px;" src="Images/Logo.png" alt="Logo" width="50px">
                <b style="position: relative; bottom: 15px;color: white;">Flexnest</b>
                <p style="margin-bottom: 40px;font-size: 30px;">Raunaq23's month in review</p>
                <b style="font-size: 25px;">SEPTEMBER 2021<br><br><br></b>
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

                                <tbody>
                                    <tr style="border-bottom: 1px solid #333333;">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>01</td>
                                        <td>02</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #333333;">
                                        <td>03</td>
                                        <td>
                                            <span
                                                style="background-color: rgb(206, 131, 33); border-radius: 50%; padding:10px">
                                                04</span>
                                        </td>
                                        <td>05</td>
                                        <td>
                                            <span
                                                style="background-color: rgb(206, 131, 33); border-radius: 50%; padding:10px">
                                                06</span>
                                        </td>
                                        <td>07</td>
                                        <td>08</td>
                                        <td>09</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #333333;">
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #333333;">
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #333333;">
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>31</td>
                                        <!-- <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td> -->
                                    </tr>
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
        </tr>
        <tr>
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
                                <font size="+7">4</font><small>kj</small>
                            </p>
                            <hr style="width: 20%; margin: 25px auto 25px auto;">
                            <p style="color: white;font-size: 25px;">20 min Flexible Ride</p>
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
        </tr>
        <tr>
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
                                        <span style="color:white;font-size: 40px;">3</span>
                                        <br>
                                        <img src="./Images/upload.png" alt="arrow down"
                                            style="width:32px;height: auto;">
                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                            role="presentation" width="90%" style="color: white; font-size: 20px;">
                                            <tr>
                                                <td>
                                                    -5 from last
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
                                        <span style="color:white;font-size: 40px;">6</span>
                                        <br>
                                        <img src="./Images/upload.png" alt="arrow down"
                                            style="width:32px;height: auto;">
                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                            role="presentation" width="90%" style="color: white; font-size: 20px;">
                                            <tr>
                                                <td>
                                                    -6 from last
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
                                        <span style="color:white;font-size: 40px;">0.1</span>
                                        <br>
                                        <img src="./Images/upload.png" alt="arrow down"
                                            style="width:32px;height: auto;">
                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                            role="presentation" width="90%" style="color: white; font-size: 20px;">
                                            <tr>
                                                <td>
                                                    -0.6 from last
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
                                        <span style="color:white;font-size: 40px;">24</span>
                                        <br>
                                        <img src="./Images/upload (1).png" alt="arrow up"
                                            style="width:32px;height: auto;">
                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="block"
                                            role="presentation" width="90%" style="color: white; font-size: 20px;">
                                            <tr>
                                                <td>
                                                    +12 from last
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
        </tr>
        <tr>
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
                            <p style="color: white;font-size: 27px; margin-bottom: 10px;" align="center">20 min
                                Flexrowing</p>
                            <p style="color: gray;font-size: 18px; line-height: 30px; margin-bottom: 30px;">Sam Yo <br>
                                Aired 9/15/21 @ 1:30
                                AM ET
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
            return emailLayoutContent;
        }