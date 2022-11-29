export module rowTypes {
    export type RowId = number;
    
  /**
   * Create an interface that contains 3 fields: 
   * - firstName: string
   * - lastName: string
   * - age: number
   */
    export interface RowElement {
      firstName: string;
      lastName: string;
      age?: number;
    }
  }
