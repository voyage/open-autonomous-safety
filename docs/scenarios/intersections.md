# Intersections

:::warning Alpha
Work In Progress
:::

[[toc]]

## Configurations
There are many combinations of intersection scenarios.

 - ego starting location: `[west] //ego always starts on the west` 
 - ego direction: `[straight, left, right]`
 - roadway type: `[3-way stop, 4-way stop, other road configurations]`
 - stopping pattern: `[1-way stop, 2-way stop, 3-way stop, 4-way stop, other]`
 - secondary vehicle(s): `[none, bus, car, golf cart, motorcycle, bicycle]`
 - secondary vehicle(s) starting position: `[n/a, north, east, south, west]`
 - secondary vehicle(s) ending position: `[n/a, north, east, south, west]`
 - right of way: `[n/a, secondary has right of way, Ego has right of way, Ego has right of way but secondary takes it (misbehaves), more vehicles or more complex scenarios]`
 
The following are examples on how these various configurations can be put together and modeled, with the expectation that all combinations will be detailed as this project continues.

## 4-Way controlled intersection with no other vehicles

**Ego Starting Location:** `west`

**Direction:** `straight`

**Roadway:** `4-way stop`

**Stopping Pattern:** `4-way stop`

**Secondary Vehicle:** `none`

**Secondary Vehicle Position:** `n/a`

**Right of Way:** `n/a`

|      |     |     |
| :--: | --- | --- |
| A    | ![I-01-A](./images/I-01-A.png) | **Scenario** <br> Ego approaches the intersection. There are no other vehicles. <br><br> **Expected Result** <br> Ego comes to a stop in front of the stopline. |
| B    | ![I-01-B](./images/I-01-B.png) | **Scenario** <br> *n/a* <br><br> **Expected Result** <br> Ego proceeds through the intersection. |
| C    | ![I-01-C](./images/I-01-C.png) | **Scenario Complete 🎉** |


## 3-Way controlled intersection with another vehicle

**Ego Starting Location:** `west`

**Direction:** `straight`

**Roadway:** `3-way stop`

**Stopping Pattern:** `3-way stop`

**Secondary Vehicle:** `car`

**Secondary Vehicle Position:** `south` to `west`

**Right of Way:** `secondary has right of way`

|      |     |     |
| :--: | --- | --- |
| A    | ![I-02-A](./images/I-02-A.png) | **Scenario** <br> Ego approaches the intersection. Secondary vehicle approaches from South and stops. <br><br> **Expected Result** <br> Ego comes to a stop in front of the stopline. |
| B    | ![I-02-B](./images/I-02-B.png) | **Scenario** <br> Secondary vehicle turns left <br><br> **Expected Result** <br> Ego remains stopped. |:
| C    | ![I-02-C](./images/I-02-C.png) | **Scenario** <br> Secondary vehicle clears the intersection. <br><br> **Expected Result** <br> Ego proceeds through the intersection. |
| D    | ![I-02-D](./images/I-02-D.png) | **Scenario Complete 🎉** |

## 3-Way uncontrolled intersection with another vehicle

**Ego Starting Location:** `west`

**Direction:** `left`

**Roadway:** `3-way stop`

**Stopping Pattern:** `1-way stop`

**Secondary Vehicle:** `car`

**Secondary Vehicle Position:** `north` to `south`

**Right of Way:** `secondary has right of way`

|      |     |     |
| :--: | --- | --- |
| A    | ![I-03-A](./images/I-03-A.png) | **Scenario** <br> Ego approaches intersection. Secondary vehicle approaches from North and enters the intersection. <br><br> **Expected Result** <br> Ego comes to a stop in front of the stopline. |
| B    | ![I-03-B](./images/I-03-B.png) | **Scenario** <br> Secondary vehicle continues through the intersection. <br><br> **Expected Result** <br> Ego remains stopped. |
| C    | ![I-03-C](./images/I-03-C.png) | **Scenario** <br> Secondary vehicle clears the intersection. <br><br> **Expected Result** <br> Ego proceeds through the intersection (turns left). |
| D    | ![I-03-D](./images/I-03-D.png) | **Scenario Complete 🎉** |

