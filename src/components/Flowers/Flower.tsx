import React from "react";
import styles from "./flower.module.css";

interface IFlowerShelf {
	name: string;
	flower: string;
	price: number;
	buyFlower: (flower: string) => void;
}

const Flower = ({ name, flower, price, buyFlower }: IFlowerShelf) => {
	return (
		<div className={styles.flower_container}>
			<div className={styles.flower_wrap}>
				<p>
					<strong>ফুল বিক্রেতা : </strong>
					{name}
				</p>
				<p>
					<strong>ফুল নাম : </strong>
					{flower}
				</p>
				<p>
					<strong>ফুল দাম : </strong>
					{price}
				</p>
				<button onClick={() => buyFlower(flower)}>ফুল ক্রয়</button>
			</div>
		</div>
	);
};

export default Flower;
