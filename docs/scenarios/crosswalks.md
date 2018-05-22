# Crosswalks

:::warning ALPHA
Work In Progress
:::


[[toc]]

:::tip Action IDs
**01**: Actor's path will intersect with Ego's crosswalk <br>
**02**: Actor's path will not intersect with Ego's crosswalk <br>
**03**: Static actor in crosswalk
:::

## Without pedestrian
**2-2-XX-CW-STR-XX**

Ego approaches crosswalk with no pedestrian

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Crosswalk without a pedestrian](./images/OAS-CW-01.png) | **Scenario** <br> Ego approaches a crosswalk. There is no pedestrian. <br><br> **Expected Result** <br> Ego proceeds through the crosswalk.  |


## Pedestrian already in crosswalk
**2-2-XX-CW-STR-PED**

Ego approaches crosswalk with a pedestrian in the crosswalk

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Crosswalk with a pedestrian-A](./images/CW-02-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian is in the crosswalk. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped.  |
|  B  | ![Crosswalk with a pedestrian-B](./images/CW-02-B.png) | **Scenario** <br> Pedestrian finishes crossing. <br><br> **Expected Result** <br> Ego proceeds through the crosswalk.  |
|  C  | ![Crosswalk with a pedestrian-C](./images/CW-02-C.png) | **Scenario complete 🎉** |


## Single lane road with pedestrian
**2-1-XX-CW-STR-PED:N>S:01**

Ego approaches crosswalk on a single lane road with pedestrian

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Single lane with a pedestrian-A](./images/CW-03-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian's calculated trajectory will be in the crosswalk when Ego is predicted to arrive. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped. |
|  B  | ![Single lane with a pedestrian-B](./images/CW-03-B.png) | **Scenario** <br> Pedestrian finishes crossing. <br><br> **Expected Result** <br> Ego proceeds through the crosswalk.  |
|  C  | ![Single lane with a pedestrian-C](./images/CW-03-C.png) | **Scenario complete 🎉** |


## Undivided double lane road with pedestrian
**2-2-XX-CW-STR-PED:N>S:01**

Ego approaches crosswalk on an undivided double lane road with pedestrian

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Undivided double lane and a pedestrian-A](./images/CW-04-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian's calculated trajectory will be in the crosswalk when Ego is predicted to arrive. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped. |
|  B  | ![Undivided double lane and a pedestrian-B](./images/CW-04-B.png) | **Scenario** <br> Pedestrian finishes crossing. <br><br> **Expected Result** <br> Ego proceeds through the crosswalk.  |
|  C  | ![Undivided double lane and a pedestrian-C](./images/CW-04-C.png) | **Scenario complete 🎉** |


## Divided road and pedestrian from right
**2-2M-XX-CW-STR-PED:S>N:01**

Ego approaches crosswalk on a divided road and a pedestrian approaches from the right

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Divided road and a pedestrian from right-A](./images/CW-05-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian's calculated trajectory will be in the crosswalk when Ego is predicted to arrive. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped. |
|  B  | ![Divided road and a pedestrian from right-B](./images/CW-05-B.png) | **Scenario** <br> Pedestrian exits crosswalk in Ego's lane of travel (between the right hand side of the road and the median). <br><br> **Expected Result** <br> Ego proceeds through the crosswalk. |
|  C  | ![Divided road and a pedestrian from right-C](./images/CW-05-C.png) | **Scenario complete 🎉** |


## Divided road and pedestrian from left
**2-2M-XX-CW-STR-PED:N>S:02**

Ego approaches crosswalk on a divided road, and a pedestrian approaches from the left and remains left of the median

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Divided road and a pedestrian from left-A](./images/CW-06-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian starts crossing and remains left of the median. <br><br> **Expected Result** <br> Ego proceeds through the crosswalk if the pedestrian remains between left of the median (i.e remains in the crosswalk of the opposing lane).  |
|  B  | ![Divided road and a pedestrian from left-B](./images/CW-06-B.png) | **Scenario complete 🎉** |

**2-2M-XX-CW-STR-PED:N>S:01**

Ego approaches crosswalk on a divided road, and a pedestrian approaches from the left and has entered the median or vehicle's lane of traffic

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Divided road and a pedestrian from left and now in lane-A](./images/CW-07-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian crosses and enters the median or Ego's lane of traffic by the time Ego hits the crosswalk. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped. |
|  B  | ![Divided road and a pedestrian from left and now in lane-B](./images/CW-07-B.png) | **Scenario** <br> Pedestrian exits crosswalk.  <br><br> **Expected Result** <br> Ego proceeds through the crosswalk.  |
|  C  | ![Divided road and a pedestrian from left and now in lane-C](./images/CW-07-C.png) | **Scenario complete 🎉** |

**2-2M-XX-CW-STR-PED:03**

Ego approaches crosswalk on a divided road, and a pedestrian approaches from the left and waits in median and gives right of way to Ego

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Divided road and a pedestrian from left and giving right of way-A](./images/CW-08-A.png) | **Scenario** <br> Ego approaches a crosswalk. Pedestrian crosses and enters the median or Ego's lane of travel by the time Ego hits the crosswalk. <br><br> **Expected Result** <br> Ego comes to a stop in front of the crosswalk and remains stopped. |
|  B  | ![Divided road and a pedestrian from left and giving right of way-B](./images/CW-08-B.png) | **Scenario** <br> Pedestrian waits in the median and gives right of way to Ego <br><br> **Expected Result** <br> Ego waits **X** seconds with a static pedestrian and then proceeds through the crosswalk.  |
|  C  | ![Divided road and a pedestrian from left and giving right of way-C](./images/CW-08-C.png) | **Scenario complete 🎉** |


## At multi-way stop
**4-2-NESW-CW-R-PED:SE>SW**

Ego approaches crosswalk at a 4 way stop and pedestrian is crossing in lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![4 way stop and pedestrian in lane-A](./images/CW-09-A.png) | **Scenario** <br> Ego approaches a 4 way stop. Pedestrian is waiting to cross a crosswalk that intersects with Ego's path of travel. <br><br> **Expected Result** <br> Ego uses turn signal if appropriate and comes to a stop behind the crosswalk and remains stopped.  |
|  B  | ![4 way stop and pedestrian in lane-B](./images/CW-09-B.png) | **Scenario** <br> Pedestrian exits crosswalk. <br><br> **Expected Result** <br> Ego proceeds
|  C  | ![4 way stop and pedestrian in lane-C](./images/CW-09-C.png) | **Scenario complete 🎉**  |

**4-2-NESW-CW-STR-PED:SE>SW**

Ego approaches crosswalk at a 4 way stop and pedestrian is not crossing in lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![4 way stop and pedestrian not in lane-A](./images/CW-10-A.png) | **Scenario** <br> Ego approaches a 4 way stop. Pedestrian is waiting to cross over a crosswalk that does intersect with Ego's path of travel. <br><br> **Expected Result** <br> Ego uses turn signal if appropriate and comes to a stop behind the crosswalk and remains stopped.  |
|  B  | ![4 way stop and pedestrian not in lane-B](./images/CW-10-B.png) | **Scenario** <br> Pedestrian travels into a crosswalk that does not lie over a road in which Ego intends to proceed. <br><br> **Expected Result** <br> Ego proceeds after a few seconds
|  C  | ![4 way stop and pedestrian not in lane-C](./images/CW-10-C.png) | **Scenario complete 🎉** |

**3-2-NSW-CW-R-PED:NW>SW**

Ego approaches crosswalk at a 3 way stop and pedestrian is crossing in lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![3 way stop and pedestrian in lane-A](./images/CW-11-A.png) | **Scenario** <br> Ego approaches a 3 way stop. Pedestrian is waiting to cross a crosswalk that intersects with Ego's path of travel. <br><br> **Expected Result** <br> Ego uses turn signal if appropriate and comes to a stop behind the crosswalk and remains stopped.  |
|  B  | ![3 way stop and pedestrian in lane-B](./images/CW-11-B.png) | **Scenario** <br> Pedestrian exits crosswalk. <br><br> **Expected Result** <br> Ego waits until the pedestrian is physically clear of the crosswalk and proceeds.  |
|  C  | ![3 way stop and pedestrian in lane-C](./images/CW-11-C.png) | **Scenario complete 🎉** |

**3-2-NSW-CW-R-PED:NW>NE**

Ego approaches crosswalk at a 3 way stop and pedestrian is not crossing in lane of travel

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![3 way stop and pedestrian not in lane-A](./images/CW-12-A.png) | **Scenario** <br> Ego approaches a 3 way stop. Pedestrian is waiting to cross over a crosswalk that does intersect with Ego's path of travel. <br><br> **Expected Result** <br> Ego uses turn signal if appropriate and comes to a stop behind the crosswalk and remains stopped.  |
|  B  | ![3 way stop and pedestrian not in lane-B](./images/CW-12-B.png) | **Scenario** <br> Pedestrian travels into a crosswalk that does not lie over a road in which Ego intends to proceed. <br><br> **Expected Result** <br> Ego proceeds after a few seconds
|  C  | ![3 way stop and pedestrian not in lane-C](./images/CW-12-C.png) | **Scenario complete 🎉**  |
