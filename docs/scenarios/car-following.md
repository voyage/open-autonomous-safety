# Car Following

:::warning ALPHA
Work In Progress
:::


[[toc]]


## Follow lead vehicle
**OAS-CF-01**

Ego follows lead vehicle that is going **X** speed

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Regular ACC](./images/CF-01-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance and never exceeds speed limit.  |


## Follow lead vehicle that suddenly stops
**OAS-CF-02**

Ego follows lead vehicle that is going **X** speed that suddenly stops

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![ACC with sudden stop](./images/CF-02-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance and never exceeds speed limit.  |
|  B  | ![ACC with sudden stop](./images/CF-02-B.png) | **Scenario** <br> Lead vehicle suddenly comes to a full stop. <br><br> **Expected Result** <br> Ego stops behind lead vehicle.  |
|  C  | ![ACC with sudden stop](./images/CF-02-C.png) | **Scenario complete 🎉**  |


## Follow lead vehicle that is stopping and going
**OAS-CF-03**

Ego follows lead vehicle that is stopping and going

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![ACC with stopping and going](./images/CF-03-A.png) | **Scenario** <br> Lead vehicle drives ahead of Ego. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance and never exceeds speed limit.  |
|  B  | ![ACC with stopping and going](./images/CF-03-B.png) | **Scenario** <br> Lead vehicle comes to a stop. <br><br> **Expected Result** <br> Ego stops behind lead vehicle.  |
|  C  | ![ACC with stopping and going](./images/CF-03-C.png) | **Scenario** <br> Lead vehicle starts driving again, stopping and going periodically. <br><br> **Expected Result** <br> Ego follows lead vehicle while maintaining minimum 4 second following distance, never exceeds speed limit (even if the lead vehicle does,) and stops behind lead vehicle.  |
