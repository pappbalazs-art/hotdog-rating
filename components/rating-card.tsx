import getDateStringFromTimestamp from "@/utils/date-string-from-timestamp";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Slider } from "@heroui/slider";

function RatingCardSlider({ label, value }: { label: string; value: number }) {
	return (
		<Slider
			label={label}
			value={value}
			classNames={{
				base: "pb-2 w-full",
				label: "font-medium text-medium text-medium-700",
				value: "font-medium text-medium text-medium-700",
			}}
			color="warning"
			maxValue={10}
			minValue={1}
			showSteps
			size="md"
			step={1}
		/>
	);
}

function RatingCardNote({ value }: { value: string }) {
	return (
		value && (
			<p className="pb-6 last:pb-0 font-medium text-small text-default-500">
				{value}
			</p>
		)
	);
}

export function RatingCard({ rating }: { rating: any }) {
	return (
		<Card className="px-2 pt-3 mb-10 last:mb-0">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<p className="uppercase font-bold">{rating.location_name}</p>
				<p className="text-tiny">{rating.location_address}</p>
				<small className="text-default-500">
					{getDateStringFromTimestamp(rating.date)}
				</small>
			</CardHeader>
			<CardBody className="overflow-visible py-5">
				<RatingCardSlider label="Dog" value={rating.dog_rating} />
				<RatingCardNote value={rating.dog_notes} />
				<RatingCardSlider label="Bun" value={rating.bun_rating} />
				<RatingCardNote value={rating.bun_notes} />
				<RatingCardSlider label="Sauce" value={rating.sauce_rating} />
				<RatingCardNote value={rating.sauce_notes} />
				<RatingCardSlider
					label="Sauce to Dog Ratio"
					value={rating.sauce_to_dog_ratio_rating}
				/>
				<RatingCardNote value={rating.sauce_to_dog_ratio_notes} />
				<RatingCardSlider
					label="Dog to Bun Ratio"
					value={rating.dog_to_bun_ratio_rating}
				/>
				<RatingCardNote value={rating.dog_to_bun_ratio_notes} />
				<RatingCardSlider
					label="Overall Taste"
					value={rating.overall_taste_rating}
				/>
				<RatingCardNote value={rating.overall_taste_notes} />
				<RatingCardSlider
					label="Customer Service"
					value={rating.customer_service_rating}
				/>
				<RatingCardNote value={rating.customer_service_notes} />
				<RatingCardSlider
					label="Overall Experience"
					value={rating.overall_experience_rating}
				/>
				<RatingCardNote value={rating.overall_experience_notes} />
				{rating.extras && (
					<p className="font-medium text-medium text-medium-700">
						Extras
					</p>
				)}
				<RatingCardNote value={rating.extras} />
			</CardBody>
		</Card>
	);
}
