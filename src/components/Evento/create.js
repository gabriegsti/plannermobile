

export default function CreateEvento(){
    return (
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={ Keyboard.dismiss } style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        validationImc()
                    }}>
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc>
                <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={()=>{
                            validationImc()
                        }}>
                            <Text style={styles.textButtonCalculator}>
                                {textButton}
                            </Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item})=>{
                return(
                    <Text style = {styles.resultImcItem} >
                        <Text style={styles.textResultItemList}>
                            Resultado IMC = 
                        </Text>
                        {item.imc}
                    </Text>
                )
            }}
            KeyExtractor={(item)=>{
                item.id
            }}   
            >
            </FlatList>
        </View>
    )
}