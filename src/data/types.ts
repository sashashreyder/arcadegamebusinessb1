export type Exercise = {
    id: string;          
    tense: string;        
    sentence: string;    
    options: string[];    
    answer: string;      
    translation?: string; 
    hint?: string;       
  };

  export type Props = {
    exercises: Exercise[];
    onExit: () => void;
  };
  
  