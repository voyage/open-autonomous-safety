# Pedestrians in Road

:::warning ALPHA
Work In Progress
:::

[[toc]]

:::tip Action IDs
**01**: Actor's path will intersect with Ego's path <br>
**02**: Actor's path will not intersect with Ego's path
:::

## Jaywalking pedestrian
**2-2-XX-PIR-STR-PED:N>S**

Ego approaches jaywalking pedestrian on undivided road

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Jaywalking pedestrian-A](./images/PIR-01-A.png) | **Scenario** <br> Ego approaches pedestrian. Pedestrian stands on side of the road. <br><br> **Expected Result** <br> Ego reduces speed.  |
|  B  | ![Jaywalking pedestrian-B](./images/PIR-01-B.png) | **Scenario** <br> Pedestrian enters roadway. <br><br> **Expected Result** <br> Ego comes to a stop in front of pedestrian.  |
|  C  | ![Jaywalking pedestrian-C](./images/PIR-01-C.png) | **Scenario** <br> Pedestrian exits the road. <br><br> **Expected Result** <br> Ego proceeds.  |
|  D  | ![Jaywalking pedestrian-D](./images/PIR-01-D.png) | **Scenario complete 🎉** |


## Jaywalking pedestrian on divided road
**2-2M-XX-PIR-STR-PED:N>S:02**

Ego approaches jaywalking pedestrian on divided road that hasn't entered Ego lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Jaywalking pedestrian divided road left-A](./images/PIR-02-A.png) | **Scenario** <br> Ego approaches pedestrian. Pedestrian leaves roadside from left of the median. <br><br> **Expected Result** <br> Ego reduces speed.  |
|  B  | ![Jaywalking pedestrian divided road left-B](./images/PIR-02-B.png) | **Scenario** <br> Pedestrian continues crossing but has not reached the median or divider of the road. <br><br> **Expected Result** <br> Ego proceeds.  |
|  C  | ![Jaywalking pedestrian divided road left-C](./images/PIR-02-C.png) | **Scenario complete 🎉** |

**2-2M-XX-PIR-STR-PED:N>S:01**

Ego approaches jaywalking pedestrian on divided road that has entered Ego lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Jaywalking pedestrian divided road right-A](./images/PIR-03-A.png) | **Scenario** <br> Ego approaches pedestrian. Pedestrian approaches from the left and has not reached the median or divider of the road. <br><br> **Expected Result** <br> Ego reduces speed.  |
|  B  | ![Jaywalking pedestrian divided road right-B](./images/PIR-03-B.png) | **Scenario** <br> Pedestrian reaches median. <br><br> **Expected Result** <br> Ego comes to a stop in front of pedestrian.  |
|  C  | ![Jaywalking pedestrian divided road right-C](./images/PIR-03-C.png) | **Scenario** <br> Pedestrian exits the road on opposite side. <br><br> **Expected Result** <br> Ego proceeds.  |
|  D  | ![Jaywalking pedestrian divided road right-D](./images/PIR-03-D.png) | **Scenario complete 🎉** |
