import React, { useState } from "react";
import Flower from "./Flower";
import styles from "./flower.module.css";

// typescript interface
interface IFlower {
	name: string;
	flower: string;
	price: number;
}

const Flowers = () => {
	const [flowerLists, setFlowerLists] = useState<IFlower[]>([]);

	const [flowers, setFlowers] = useState<IFlower>({
		name: "",
		flower: "",
		price: NaN,
	});

	// catch input from user
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFlowers({ ...flowers, [e.target.name]: e.target.value });

	// flower add handler
	const addFlowers = () => {
		setFlowerLists([...flowerLists, flowers]);
	};

	// flower buy handler
	const buyFlower = (flowerName: string) => {
		const newFlowerLists = flowerLists.filter(
			(flower) => flower.flower !== flowerName
		);
		setFlowerLists(newFlowerLists);
	};

	return (
		<div>
			<div>
				<h2 className={styles.title}>🏵 ফুল বিক্রেতা</h2>
				<input
					onChange={onChange}
					type="text"
					name="name"
					placeholder="ফুল বিক্রেতা"
				/>

				<input
					onChange={onChange}
					type="text"
					name="flower"
					placeholder="ফুলের নাম"
				/>

				<input
					onChange={onChange}
					type="text"
					name="price"
					placeholder="ফুলের দাম"
				/>

				<button onClick={addFlowers}>ফুল যোগ করুন</button>
			</div>
			<div>
				<h2 className={styles.title}>🏵 ফুলের তাক 🏵</h2>

				{/* message */}
				{flowerLists.length < 1 && (
					<h2 className={styles.message}>তোমার ফুলের তাকে কোনো ফুল নেই !!</h2>
				)}

				{flowerLists.map((flower) => (
					<Flower
						key={flower.price}
						name={flower.name}
						flower={flower.flower}
						price={flower.price}
						buyFlower={buyFlower}
					/>
				))}
			</div>
		</div>
	);
};

export default Flowers;
