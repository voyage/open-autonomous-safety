# Car Following

:::warning ALPHA
Work In Progress
:::


[[toc]]


## Follow lead vehicle
**2-2-XX-CF-STR-CAR**

Ego follows lead vehicle that is going **X** speed

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Regular ACC](./images/CF-01-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum following distance and never exceeds speed limit.  |


## Follow lead vehicle that suddenly stops
**2-2-XX-CF-STR-CAR:01**

Ego follows lead vehicle that is going **X** speed that suddenly stops

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![ACC with sudden stop](./images/CF-02-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum following distance and never exceeds speed limit.  |
|  B  | ![ACC with sudden stop](./images/CF-02-B.png) | **Scenario** <br> Lead vehicle suddenly comes to a full stop. <br><br> **Expected Result** <br> Ego stops behind lead vehicle.  |
|  C  | ![ACC with sudden stop](./images/CF-02-C.png) | **Scenario complete 🎉**  |


## Follow lead vehicle that is stopping and going
**2-2-XX-CF-STR-CAR:02**

Ego follows lead vehicle that is stopping and going

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![ACC with stopping and going](./images/CF-03-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum following distance and never exceeds speed limit.  |
|  B  | ![ACC with stopping and going](./images/CF-03-B.png) | **Scenario** <br> Lead vehicle comes to a stop. <br><br> **Expected Result** <br> Ego stops behind lead vehicle.  |
|  C  | ![ACC with stopping and going](./images/CF-03-C.png) | **Scenario** <br> Lead vehicle starts driving again, stopping and going periodically. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance, never exceeds speed limit (even if the lead vehicle does,) and stops behind lead vehicle.  |


## Lead vehicle cuts in
**2-2-XX-CF-STR-CAR:Pa>E:03**

A secondary vehicle cuts in ahead of Ego

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Vehicle cut in](./images/CF-04-A.png) | **Scenario** <br> Secondary vehicle cuts in ahead of Ego inside the safe following distance. <br><br> **Expected Result** <br> Ego slows down and follows lead vehicle.  |
|  B  | ![Vehicle cut in](./images/CF-04-B.png) | **Scenario complete 🎉**  |


## Lead vehicle cuts out
**2-2-XX-CF-STR-CAR:E>Pa:04**

Lead vehicle cuts out of Ego's lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Vehicle cut out](./images/CF-05-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance and never exceeds speed limit.  |
|  B  | ![Vehicle cut out](./images/CF-05-B.png) | **Scenario** <br> Lead vehicle cuts out of Ego's lane of travel. <br><br> **Expected Result** <br> Ego continues traveling in lane of travel.  |
|  C  | ![Vehicle cut out](./images/CF-05-C.png) | **Scenario complete 🎉**  |


## Lead vehicle breaks speed limit
**2-2-XX-CF-STR-CAR:05**

Lead vehicle speeds away and breaks speed limit

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Vehicle breaks speed limit](./images/CF-06-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance and never exceeds speed limit.  |
|  B  | ![Vehicle breaks speed limit](./images/CF-06-B.png) | **Scenario** <br> Lead vehicle accelerates and drives over the speed limit. <br><br> **Expected Result** <br> Ego continues driving but does not surpass speed limit  |
|  C  | ![Vehicle breaks speed limit](./images/CF-06-C.png) | **Scenario complete 🎉** |
