# Reversing Vehicles

:::warning ALPHA
Work In Progress
:::

[[toc]]

:::tip Action IDs
None currently
:::

## Vehicle backing out of driveway
**2-2-XX-RV-STR-CAR:Dr>E**

Ego approaches vehicle backing out of driveway

|    |                                    |          |
| -- | ---------------------------------- | -------- |
|  A  | ![Vehicle reversing-A](./images/RV-01-A.png) | **Scenario** <br> Ego approaches vehicle. Secondary vehicle begins backing out of a driveway and into Ego's lane of travel. <br><br> **Expected Result** <br> Ego reduces speed and stops with enough room for secondary vehicle to backup and orient itself into the lane of travel.  |
|  B  | ![Vehicle reversing-B](./images/RV-01-B.png) | **Scenario** <br> Secondary vehicle finishes reverse maneuver and proceeds in lane of travel. <br><br> **Expected Result** <br> Ego proceeds.  |
|  C  | ![Vehicle reversing-C](./images/RV-01-C.png) | **Scenario complete 🎉** |
