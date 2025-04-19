import { database } from "@/firebase";
import { Button } from "@heroui/button";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@heroui/modal";
import { deleteDoc, doc } from "firebase/firestore";

export default function DeleteRatingModal({
	isOpen,
	onOpen,
	onOpenChange,
	selectedRating,
	updateRatings,
}: {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
	selectedRating: any;
	updateRatings: Function;
}) {
	const handleDeleteRating = async () => {
		await deleteDoc(doc(database, "ratings", selectedRating.id));
		await updateRatings();

		onOpenChange();
	};

	return (
		selectedRating && (
			<Modal
				isOpen={isOpen}
				placement="center"
				scrollBehavior="inside"
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose: any) => (
						<>
							<ModalHeader className="flex flex-col gap-2">
								Delete rating
							</ModalHeader>
							<ModalBody>
								<p>
									Are you sure you want to delete this rating?
								</p>
								<p className="font-bold">
									{selectedRating.location_name}
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									className="w-full"
									color="danger"
									onPress={handleDeleteRating}
								>
									Delete
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		)
	);
}
