import React from "react";
import styles from "./flower.module.css";

interface IFlowerShelf {
	name: string;
	flower: string;
	price: number;
}

const Flower = ({ name, flower, price }: IFlowerShelf) => {
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
				<button>ফুল ক্রয়</button>
			</div>
		</div>
	);
};

export default Flower;
