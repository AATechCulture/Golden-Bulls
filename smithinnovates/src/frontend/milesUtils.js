import { increment, collection, updateDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../backend/firebase';

// Define a function to update the user's miles in Firestore
export async function updateMilesInFirestore(newMiles) {
  const user = auth.currentUser;
  const userRef = collection(db, `users/${user?.uid}/info`);

  try {
    const snapshot = await getDocs(userRef);
    // Update the 'AAdvantageMiles' field with the new value
    snapshot.docs.forEach((doc) => {
         updateDoc(doc.ref, { AAdvantageMiles: increment(newMiles) }).then(
            console.log('Miles updated successfully in Firestore.')
         )
      });
    
  } catch (error) {
    console.error('Error updating miles in Firestore:', error);
  }
}
