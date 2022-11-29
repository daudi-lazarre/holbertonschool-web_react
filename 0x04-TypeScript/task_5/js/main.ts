/**
 * Create an interface for the major credits that defines a number of credits 
 * and add a brand property to uniquely identify.
 */
 interface MajorCredits {
    brand: 'Major';
    credits: number;
  }
  
  /**
   * Create an interface for the minor credits that defines a number of credits
   * and add a brand property to uniquely identify.
   */
  interface MinorCredits {
    brand: 'Minor';
    credits: number;
  }
  
  /**
   * Function that takes a 2 arguments (subject1 and subject2) and returns the sum of the credits 
   * of the 2 subjects for Major credits.
   */
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return (subject1.credits + subject2.credits);
  }
  
  /**
   * Function that takes a 2 arguments (subject1 and subject2) and returns the sum of the credits 
   * of the 2 subjects for Minor credits.
   */
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return (subject1.credits + subject2.credits);
  }
  
  // Sample data for the tests
  const Mathematics = { credits: 3 } as MajorCredits;
  const English = { credits: 3 } as MajorCredits;
  const Filosophy = { credits: 1 } as MinorCredits; 
  const Art = { credits: 1 } as MinorCredits; 
  
  // Print the sum of the credits for Major and Minor credits
  console.log(sumMajorCredits(Mathematics, English));
  console.log(sumMinorCredits(Filosophy, Art));
  