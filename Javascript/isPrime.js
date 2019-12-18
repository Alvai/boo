const isPrime = (prime) => {
  for (let index = 2; index < prime; index++) {
    if (prime % index === 0) return false;
  }
  return true;
}

console.log(isPrime(process.argv[2]));