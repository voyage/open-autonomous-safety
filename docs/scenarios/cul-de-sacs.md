# Cul-de-sacs

:::warning ALPHA
Work In Progress
:::

[[toc]]

## Cul-de-sac
**OAS-CDS-01**

Ego approaches cul-de-sac

|      |     |     |
| :--: | --- | --- |
| A    | ![CDS-01](./images/CDS-01.png) | **Scenario** <br> Ego approaches a cul-de-sac. <br><br> **Expected Result** <br> Ego reduces speed by 20 percent, enters the cul-de-sac from the right hand portion of the road, and proceeds counterclockwise. |

## Raised island
**OAS-CDS-02**

Ego approaches cul-de-sac with an island at its center

|      |     |     |
| :--: | --- | --- |
| A    | ![CDS-02](./images/CDS-02.png) | **Scenario** <br> Ego approaches cul-de-sac with an island. <br><br> **Expected Result** <br> Ego reduces speed by 20 percent, enters the cul-de-sac from the right hand portion of the road, and proceeds counterclockwise. |

## With pedestrian or object
**OAS-CDS-03**

Ego approaches cul-de-sac with pedestrian in roadway

|      |     |     |
| :--: | --- | --- |
| A    | ![CDS-03-A](./images/CDS-03-A.png) | **Scenario** <br> Ego approaches cul-de-sac. Pedestrian stands in cul-de-sac, in Ego's path of travel. <br><br> **Expected Result** <br> Ego reduces speed by 20 percent, enters the cul de sac from the right hand portion of the road, and proceeds counterclockwise. Ego stops for the pedestrian. |
| B    | ![CDS-03-B](./images/CDS-03-B.png) | **Scenario** <br> Pedestrian doesn't move. <br><br> **Expected Result** <br> Ego remains stopped for 8 seconds. |
| C    | ![CDS-03-C](./images/CDS-03-C.png) | **Scenario** <br> Pedestrian doesn't move. <br><br> **Expected Result** <br> Ego navigates around pedestrian, keeping a 3' buffer. |
| D    | ![CDS-03-D](./images/CDS-03-D.png) |  **Scenario complete 🎉** |
