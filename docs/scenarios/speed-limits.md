# Speed Limits

:::warning ALPHA
Work In Progress
:::

[[toc]]

:::tip Action IDs
**01**: Speed limit changes
:::

## Single speed zone
**2-1-XX-SL-STR-XX**

Ego in 20 mph speed zone.

|      |     |     |
| :--: | --- | --- |
| A    | ![SL-01](./images/SL-01.png) | **Scenario** <br> Ego in 20 mph speed zone. <br><br> **Expected Result** <br> Ego doesn't exceed 20 mph. |

## Speed zone transition
**2-1-XX-SL-STR-XX:01**

Ego moves from 20 mph speed zone to 15 MPH speed zone.

|      |     |     |
| :--: | --- | --- |
| A    | ![SL-02-A](./images/SL-02-A.png) | **Scenario** <br> Ego in 20 mph speed zone approaching a 15 mph speed zone. <br><br> **Expected Result** <br> Ego doesn't exceed 20 mph, decreases speed. |
| B    | ![SL-02-B](./images/SL-02-B.png) | **Scenario** <br> Ego moves to a 15 mph speed zone. <br><br> **Expected Result** <br> Ego doesn't exceed 15 mph. |
