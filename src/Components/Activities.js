import React from 'react';
import './Activities.css';
import FirstAid from './Images/FirstAid.png';
import Activity1 from './Images/Activity1.png';
import Quiz from './Images/Quiz.png';
import SportsDay from './Images/sportsday.png';
import SportsEvent from './Images/sportevent.png';
import SportsEvent1 from './Images/sportsevent1.png';
import Cultural from './Images/culturalday.png';
import Pongal from './Images/pongal.png';
import Christmas from './Images/christmas.png';
import Republic from './Images/Republicday.png';
import Independence from './Images/Independence.png';
import TeachersDay from './Images/Teacherday.png';
import Womenday from './Images/Women.png';
import yogoday from './Images/yogaday.png';
import yogoday1 from './Images/yogaday1.png';
import Nss from './Images/NSS.png';
import Treeplantation from './Images/Treeplantation.png';
import Treeplantation1 from './Images/Treeplantation1.png';

const Activities = () => {
  return (
    <div className="activities-container">
      <h2>Co-curricular & Extra-curricular Activities</h2>
      <p>
        The college has an Active Student Nurses Association (SNA). The SNA executive comprises of the SNA President, SNA Advisor, Vice president, Secretary, and Treasurer. 
        These are various committees functioning under the SNA, headed by student chairpersons and coordinated and guided by the teaching staff of the college. 
        The activities planned are coordinated and executed by the SNA body.
      </p>
      <p>
        All important festivals and events such as Fresher’s Day, Teacher’s Day, College Week, etc., are celebrated by the student body, and picnics are also organized. 
        The students actively participate in various cultural and sports competitions, and the winners are encouraged to participate in state or national-level SNA competitions.
      </p>
      <section>
        <h3>CNE: F(ir)ast Aid – Dare to Care</h3>
        <div className="activities-image">
        <img 
          src={FirstAid} 
          alt="FirstAid" 
        />
      </div>
        <h3>Women & Mental Health – Magnifying Quality Nursing Practice</h3>
        <div className="activities-image">
        <img 
          src={Activity1} 
          alt="Activity1" 
        />
      </div>
      </section>

      <section>
        <h3>Quiz Competition</h3>
        <p>
          An intercollegiate quiz competition “IWIN” was conducted on 21.04.2017, with 7 teams participating. Kamala College of Nursing won the rolling shield.
        </p>
        <div className="activities-image">
        <img 
          src={Quiz} 
          alt="Quiz" 
        />
      </div>
      </section>

      <section>
        <h3>Sports Day</h3>
        <p>
          Sports competitions were conducted from 27.03.2017 to 31.03.2017 for faculty and students. 
        </p>
        <div className="activities-image">
        <img 
          src={SportsDay} 
          alt="SportsDay" 
        />
      </div>
        <p>Sports events were also held at other institutions.</p>
        <div className="activities-image">
        <img 
          src={SportsEvent} 
          alt="SportsEvent" 
        />
      </div>
      <div className="activities-image">
        <img 
          src={SportsEvent1} 
          alt="SportsEvent1" 
        />
      </div>
      </section>

      <section>
        <h3>Recreation</h3>
        <p>
          Cultural Day - Cultural competitions were conducted from 27.03.2017 to 31.03.2017 for faculty and students.
        </p>
        <div className="activities-image">
        <img 
          src={Cultural} 
          alt="Cultural" 
        />
      </div>
        <h3>Annual Day (12.05.2017)</h3>
        <p>
          The program started at 4:00 PM with a prayer song by II year B.Sc(N) students, followed by a welcome dance by Ms. G. Umamaheswari, III B.Sc(N). 
          The welcome address was given by Aneetta Ann James, III year B.Sc(N). The lighting of the kuthuvilakku was done by Mrs. Jayalakshmi Panneerselvam, correspondent, Shanmuga College of Nursing, and by dignitaries. 
          The Nightingale lamp was lit by Chief Guest Mrs. Chitralekha, Nursing Superintendent at Pranav Hospital, Salem. 
          A speech on Nurse’s Day theme was delivered by Mrs. T. Mercy Chandriga, Vice Principal, Shanmuga School of Nursing, Salem.
        </p>
        <p>
          The speech continued by Mrs. Vungngaih, IV B.Sc(N) student, on the topic of “History of Florence Nightingale,” highlighting her service during the First World War and the development of the nursing profession. 
          The presidential address was given by Dr. P.S. Panneerselvam, MS, MNAMS, FICS, Chairman of Shanmuga College of Nursing, Salem. 
          After the cake cutting and sharing, a speech regarding Nurse’s Day was given by Ms. Chitraleka Nursing Superintendent at Pranav Hospital, Salem.
        </p>
        <p>
          The annual report was read by Prof. S. Annam, Principal of Shanmuga College of Nursing, Salem. 
          The Chief Guest address was given by Hon. Judge Thiru P. Balasubramanian, M.A, B.L., Special District Judge, MCOP Tribunal, Salem. 
          Students were awarded for academic, cultural, and sports achievements. Cultural events were performed by college students, and the program concluded with a vote of thanks by Ms. C.M. Nivadha, III B.Sc(N), ending with the national anthem at 8:30 PM.
        </p>
        <h3>Triple X Programme</h3>
        <p>
          The Triple X programme (X-mas, New Year & Pongal) was celebrated on 22.12.2016 between 2:00 PM and 4:00 PM in the Shanmuga campus, featuring various entertainment programs like dance, songs, and skits.
        </p>
        <div className="activities-image">
        <img 
          src={Pongal} 
          alt="Pongalm" 
        />
      </div>      
      <div className="activities-image">
        <img 
          src={Christmas} 
          alt="Christmas" 
        />
      </div>
      </section>

      <section>
        <h3>Republic Day Celebration</h3>
        <p>
          Republic Day was celebrated on 26.01.2017 at Shanmuga Hospital premises from 8:00 AM to 9:00 AM. Certificates and momentos were distributed to participants of the CNE programme, and a patriotic speech and dance were presented by B.Sc and GNM students.
        </p>
        <div className="activities-image">
        <img 
          src={Republic} 
          alt="Republic" 
        />
      </div>
      </section>

      <section>
        <h3>Independence Day</h3>
        <p>
          Independence Day was celebrated on 15.08.2016 at the Shanmuga Hospital premises from 7:45 AM to 9:30 AM, with flag hoisting by Dr. P.S. Panneerselvam, Chairman SCON. Certificates and prizes were distributed to presenters of the CNE programme.
        </p>
        <div className="activities-image">
        <img 
          src={Independence} 
          alt="Independence" 
        />
      </div>
      </section>

      <section>
        <h3>Teacher’s Day</h3>
        <p>
          Teacher’s Day was celebrated on 07.10.2016 between 2:00 PM and 4:00 PM in the Shanmuga Auditorium, featuring cultural programmes conducted by faculty members.
        </p>
        <div className="activities-image">
        <img 
          src={TeachersDay} 
          alt="TeachersDay" 
        />
      </div>
      </section>

      <section>
        <h3>Other Events</h3>
        <p>
          YRC - Women’s Day on March 8th, 2017.
        </p>
        <div className="activities-image">
        <img 
          src={Womenday} 
          alt="Womenday" 
        />
      </div>
        <h3>International Yoga Day Celebration – June 21, 2017</h3>
        <p>
          A mass yoga demonstration for students was held at Gandhi Stadium, Salem on June 21. Students of II year B.Sc(N) and II GNM, about 60 in total, performed yoga to emphasize its importance in daily life. 
          The event was attended by the Principal, Mrs. S. Annam, Mr. Anie Thomas Kuruvilla (organizer), and Mr. Silverston (co-organizer). 
          The program was inaugurated by the Director of the yoga session, who spoke about Yoga Day's significance. A display was performed by the students, and they actively participated, demonstrating various Asanas under the guidance of a yoga instructor, ending with refreshments.
        </p>
        <div className="activities-image">
        <img 
          src={yogoday} 
          alt="yogoday" 
        />
      </div>
      <div className="activities-image">
        <img 
          src={yogoday1} 
          alt="yogoday1" 
        />
      </div>
      </section>

      <section>
        <h3>NSS Activities</h3>
        <h3>Clean India</h3>
        <div className="activities-image">
        <img 
          src={Nss} 
          alt="Nss" 
        />
      </div>
        <h3>Tree Plantation</h3>
        <p>
          A Tree Plantation Programme was held in our college on 21st July 2017. First-year B.Sc(N) and GNM students actively participated, along with our Principal Prof. S. Annam and 3 teachers. 
          Students were divided into 12 groups to plant saplings in the college premises. 
          The teacher explained the benefits of the programme, and students took an oath to care for the trees planted, committing to water them daily. 
          In total, 25 plants were successfully planted during the monsoon season, and the programme concluded with the students actively supporting the growth of the plants.
        </p>
        <div className="activities-image">
        <img 
          src={Treeplantation} 
          alt="Treeplantation" 
        />
      </div>
      <div className="activities-image">
        <img 
          src={Treeplantation1} 
          alt="Treeplantation1" 
        />
      </div>
      </section>

      <section>
        <h3>Guidance and Counseling</h3>
        <p>
          Guidance and counseling are provided to students regularly as needed. Each teacher is allotted a group of students for guidance and counseling. 
          Students receive counseling upon admission to the first-year courses, with ongoing support and monitoring of their performance.
        </p>
      </section>
    </div>
  );
};

export default Activities;
